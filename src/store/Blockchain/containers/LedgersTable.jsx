import { connect } from 'react-redux'
import {LedgersTable as LedgersTableC} from "../../../components/explorer/Ledgers/LedgersTable";
import {cancelStream, startStream} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		records: state.BC.hasOwnProperty('ledgers') ? state.BC['ledgers'].records || []  : [],
		loaded: state.BC.hasOwnProperty('ledgers') ? state.BC['ledgers'].loaded || false  : false,
	}
};


const LedgersTable = connect(mapStateToProps,{startStream, cancelStream})(LedgersTableC);
export default 	LedgersTable;

