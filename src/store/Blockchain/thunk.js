import {cancelStreamSuccessAction, startStreamBeginAction, startStreamErrorAction, startStreamSuccessAction, addRecordAction} from "./actions";
import camelCase from 'lodash/camelCase'
import mapKeys from 'lodash/mapKeys'
import omit from 'lodash/omit'


const bettaId = {};
const getId = (caller) => {
	const currentId = bettaId[caller] || 0;
	let newId = currentId + 1;

	if(newId > 50)
		newId = 0;

	bettaId[caller] = newId;
	return newId;
};
const formatRecord  = (caller,record) => {


	record.time = record.created_at || record.closed_at;
	record.bettaId = getId(caller);
	record.parentRenderTimestamp = Date.now();


	const camelCasedRecord = mapKeys(record, (v, k) => camelCase(k));
	return omit(camelCasedRecord, ['links']);
};
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
	const formatedRecords = [];
	data.records.forEach(record =>{
		formatedRecords.push(formatRecord(caller,record));
	});

	dispatch(addRecordAction(caller, formatedRecords , limit));

	const pagingToken = data.records[0].paging_token;
	const es = await api[caller]()
			.cursor(pagingToken)
			.limit(Math.round(limit/3))
			.order('asc')
			.stream({
				onmessage: (record => {
					dispatch(addRecordAction(caller, formatRecord(caller,record) , limit));
				}),
				onerror: onStreamError
			});

	dispatch(startStreamSuccessAction(caller, es));
};


const onStreamError = (error)  => {
	//console.error(error)
};

export const cancelStream = (caller) => async (dispatch, getState) => {
	const {BC} = getState();
	if(BC.hasOwnProperty(caller) &&	BC[caller].closeStream){

		BC[caller].closeStream();
	}
	dispatch(cancelStreamSuccessAction(caller));
};
