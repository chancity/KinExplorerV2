import { connect } from 'react-redux'
import {OperationsTable as OperationsTableC} from "../../../components/explorer/Operations/OperationsTable";
import {cancelStream, startStream} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		loaded: state.BC.hasOwnProperty('operations') ? state.BC['operations'].loaded || false  : false,
		isMobile: state.UI.isMobile
	}
};


const OperationsTable = connect(mapStateToProps,{startStream, cancelStream})(OperationsTableC);
export default 	OperationsTable;

