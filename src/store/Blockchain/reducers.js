import {
	STARTED_STREAM_SUCCESS,
	STARTED_STREAM_BEGIN,
	STARTED_STREAM_ERROR,
	CANCELED_STREAM_BEGIN,
	CANCELED_STREAM_SUCCESS,
	CANCELED_STREAM_ERROR,
	ADD_RECORD
} from './types'
const initialState = {};

export default (state = initialState, action)  => {
	const stateCopy = {...state};
	switch (action.type) {
		case STARTED_STREAM_BEGIN:
			stateCopy[action.payload.name] = {
				records:[],
				closeStream: undefined,
				parentRenderTimestamp: undefined,
				loaded: false
			};
			return {
				...state,
				...stateCopy
			};
		case STARTED_STREAM_SUCCESS:
			stateCopy[action.payload.name].closeStream = action.payload.closeFn;
			stateCopy[action.payload.name].loaded = true;
			return {
				...state,
				...stateCopy
			};
		case STARTED_STREAM_ERROR:
			stateCopy[action.payload.name].closeStream = undefined;
			stateCopy[action.payload.name].error = action.payload.error;
			stateCopy[action.payload.name].loaded = true;
			return {
				...state,
				...stateCopy
			};
		case CANCELED_STREAM_SUCCESS:
			delete stateCopy[action.payload.name];
			return {
				...state,
				...stateCopy
			};
		case ADD_RECORD:
			const newRecord = action.payload.record;
			const recordsCopy = [...stateCopy[action.payload.name].records];
			const insertIdx = recordsCopy.findIndex(rec => rec.created_at < newRecord.created_at);
			recordsCopy.splice(insertIdx, 0, newRecord);

			if(action.payload.splice) {
				recordsCopy.splice(-1, 1);
			}
			const sorted = recordsCopy.sort((a,b)=> b.created_at-a.created_at);
			stateCopy[action.payload.name].records =  sorted;
			stateCopy[action.payload.name].parentRenderTimestamp = Date.now();

			return {
				...state,
				...stateCopy,

			};
		default:
			return state
	}
};
