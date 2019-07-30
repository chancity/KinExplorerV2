import { connect } from 'react-redux'
import {OperationsTable as OperationsTableC} from "../../../components/explorer/Operations/OperationsTable";
import {cancelStream, startStream} from "../thunk";

const mapStateToProps = (state)=>({
	records: state.BC.records['operations'],
	loaded: state.BC.loaded
});


const OperationsTable = connect(mapStateToProps,{startStream, cancelStream})(OperationsTableC);
export default 	OperationsTable;

