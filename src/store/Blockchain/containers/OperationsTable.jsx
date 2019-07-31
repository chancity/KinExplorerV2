import { connect } from 'react-redux'
import {OperationsTable as OperationsTableC} from "../../../components/explorer/Operations/OperationsTable";
import {cancelStream, startStream} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		records: state.BC.hasOwnProperty('operations') ? state.BC['operations'].records || []  : [],
		loaded: state.BC.hasOwnProperty('operations') ? state.BC['operations'].loaded || false  : false,
		parentRenderTimestamp: state.BC.hasOwnProperty('operations') ? state.BC['operations'].parentRenderTimestamp || new Date()  : new Date(),
		isMobile: state.UI.isMobile
	}
};


const OperationsTable = connect(mapStateToProps,{startStream, cancelStream})(OperationsTableC);
export default 	OperationsTable;

