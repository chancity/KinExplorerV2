import {cancelStreamSuccessAction, startStreamBeginAction, startStreamErrorAction, startStreamSuccessAction, addRecordAction} from "./actions";
import camelCase from 'lodash/camelCase'
import mapKeys from 'lodash/mapKeys'
import omit from 'lodash/omit'

const formatRecord  = (record) => {
	record.time = record.created_at || record.closed_at;
	const camelCasedRecord = mapKeys(record, (v, k) => camelCase(k));
	return omit(camelCasedRecord, ['links', 'pagingToken']);
}
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
		onMessage.call(null, record, dispatch, caller, false, limit);
	});

	const pagingToken = data.records[0].paging_token;
	const es = await api[caller]()
			.cursor(pagingToken)
			.limit(limit)
			.order('asc')
			.stream({
				onmessage: (record => {
					onMessage.call(null, record, dispatch, caller, true, limit)
				}),
				onerror: onStreamError
			});

	dispatch(startStreamSuccessAction(caller, es));
};

const records = {};
function onMessage(record, dispatch, caller, splice, limit) {
	const what = records[caller] ||  ( records[caller] = {});
	const _records = what.records || (what.records = []);

	_records.push(formatRecord(record));

	clearTimeout(what.clear);

	what.clear = setTimeout(function(){
			dispatch(addRecordAction(caller, what.records , splice));
			what.records.length = 0;
		},
		500);


	if(what.length >= limit) {
		dispatch(addRecordAction(caller, what, splice));
		what.length = 0;
	}

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
