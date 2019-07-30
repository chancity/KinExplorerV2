import {cancelStreamSuccessAction, startStreamBeginAction,startStreamSuccessAction, addRecordAction} from "./actions";

const txHandler = function (txResponse) {
	console.log(txResponse);
};

export const startStream = (caller) => async (dispatch, getState, {api}) => {
	dispatch(startStreamBeginAction(caller));
	const okay = await api[caller]()
		.cursor('now')
		.limit(25)
		.call();

	const data = await okay.prev();

	data.records.forEach(record =>{
		dispatch(addRecordAction(caller, record, false))
	});

	const pagingToken = data.records[0].paging_token;

	const es = await api[caller]()
			.cursor(pagingToken)
			.limit(25)
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
	if(BC.streams.hasOwnProperty(caller)){
		BC.streams[caller]();
	}
	dispatch(cancelStreamSuccessAction(caller));
};
