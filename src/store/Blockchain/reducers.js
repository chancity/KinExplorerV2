import {
	STARTED_STREAM_SUCCESS,
	STARTED_STREAM_BEGIN,
	STARTED_STREAM_ERROR,
	CANCELED_STREAM_BEGIN,
	CANCELED_STREAM_SUCCESS,
	CANCELED_STREAM_ERROR,
	ADD_RECORD
} from './types'

const initialState = {
	streams: {},
	records: {},
	loaded:false,
	parentRenderTimestamp: Date.now()
};

export default (state = initialState, action)  => {
	const stateCopy = {...state};
	switch (action.type) {
		case STARTED_STREAM_BEGIN:
			stateCopy.streams[action.payload.name] = undefined;
			stateCopy.records[action.payload.name] = [];

			return {
				...state,
				streams: stateCopy.streams,
				records: stateCopy.records,
				loaded: false
			};
		case STARTED_STREAM_SUCCESS:
			stateCopy.streams[action.payload.name] = action.payload.closeFn;
			return {
				...state,
				streams: stateCopy.streams,
				loaded: true
			};
		case STARTED_STREAM_ERROR:
			stateCopy.streams[action.payload.name] = undefined;
			return {
				...state,
				streams: stateCopy.streams,
				error: action.payload.error,
				loaded: true
			};
		case CANCELED_STREAM_SUCCESS:
			const newStreanState =  {...state};
			delete newStreanState.streams[action.payload.name];
			return {
				...state,
				streams: newStreanState.streams
			};
		case ADD_RECORD:
			const newRecord = action.payload.record;
			const recordsCopy = [...stateCopy.records[action.payload.name]];
			const insertIdx = recordsCopy.findIndex(rec => rec.created_at < newRecord.created_at);
			recordsCopy.splice(insertIdx, 0, newRecord);
			if(action.payload.splice) {
				recordsCopy.splice(-1, 1);
			}
			stateCopy.records[action.payload.name] = recordsCopy;

			return {
				...state,
				records: 	stateCopy.records,
				parentRenderTimestamp: Date.now()
			};
		default:
			return state
	}
};
