import {
	STARTED_STREAM_SUCCESS,
	STARTED_STREAM_BEGIN,
	STARTED_STREAM_ERROR,
	CANCELED_STREAM_BEGIN,
	CANCELED_STREAM_SUCCESS,
	CANCELED_STREAM_ERROR,
	ADD_RECORD
} from './types'

const startStreamBeginAction = (name) => ({
	type: STARTED_STREAM_BEGIN,
	payload:{name: name}
});

const startStreamSuccessAction = (name, closeFn) => ({
	type: STARTED_STREAM_SUCCESS,
	payload:{name: name, closeFn: closeFn}
});
const startStreamErrorAction = (name, error) => ({
	type: STARTED_STREAM_ERROR,
	payload:{name: name, error: error}
});

const cancelStreamBeginAction = () => ({
	type: CANCELED_STREAM_BEGIN
});
const cancelStreamSuccessAction = (name) => ({
	type: CANCELED_STREAM_SUCCESS,
	payload:{name: name}
});
const cancelStreamErrorAction = (name, error) => ({
	type: CANCELED_STREAM_ERROR,
	payload:{name: name, error}
});

const addRecordAction = (name, record, splice) => ({
	type: ADD_RECORD,
	payload:{
		record: record,
		name: name,
		splice: splice
	}
});


export {
	startStreamBeginAction,
	startStreamSuccessAction,
	startStreamErrorAction,
	cancelStreamBeginAction,
	cancelStreamSuccessAction,
	cancelStreamErrorAction,
	addRecordAction
}
