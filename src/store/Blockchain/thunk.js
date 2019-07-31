import {cancelStreamSuccessAction, startStreamBeginAction, startStreamErrorAction, startStreamSuccessAction, addRecordAction} from "./actions";


export const startStream = (caller, limit) => async (dispatch, getState, {api}) => {
	const {BC} = getState();
	if(BC.hasOwnProperty(caller)){
		dispatch(startStreamErrorAction(caller,"only one stream at a time is allowed"));
	}
	dispatch(startStreamBeginAction(caller));

	const okay = await api[caller]()
		.cursor('now')
		.limit(limit)
		.call();

	const data = await okay.prev();

	data.records.forEach(record =>{
		dispatch(addRecordAction(caller, record, false))
	});

	const pagingToken = data.records[0].paging_token;

	const es = await api[caller]()
			.cursor(pagingToken)
			.limit(limit)
			.order('asc')
			.stream({
				onmessage: (record => {
					dispatch(addRecordAction(caller, record, true))
				}),
				onerror: onStreamError
			});

	dispatch(startStreamSuccessAction(caller, es));
};


const onStreamError = (error)  => {
	console.error(error)
};

export const cancelStream = (caller) => async (dispatch, getState) => {
	const {BC} = getState();
	if(BC.hasOwnProperty(caller)){
		BC[caller].closeStream();
	}
	dispatch(cancelStreamSuccessAction(caller));
};
