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
	const stateCopy  = {...state};
	switch (action.type) {
		case STARTED_STREAM_BEGIN:
			stateCopy[action.payload.name] = {
				records:[],
				closeStream: undefined,
				error: undefined,
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
			const recordsCopy = [...stateCopy[action.payload.name].records];
			const record = action.payload.record;


			if(Array.isArray(record)) {
				record.forEach((rec) => {
					recordsCopy.splice(0, 0, rec);
					if(recordsCopy.length >= action.payload.limit ) {
						recordsCopy.splice(-1, 1);
					}
				});

			} else {

				recordsCopy.splice(0, 0, record);
				if(recordsCopy.length >= action.payload.limit ) {
					recordsCopy.splice(-1, 1);
				}
			}

			if(!stateCopy[action.payload.name].loaded)
				stateCopy[action.payload.name].loaded =  true;
			stateCopy[action.payload.name].records =  recordsCopy;

			return {
				...state,
				...stateCopy,

			};
		default:
			return state
	}
};
