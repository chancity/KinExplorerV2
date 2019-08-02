import { connect } from 'react-redux'
import {PaymentsTable as PaymentsTableTableC} from "../../../components/explorer/Payments/PaymentsTable";
import {cancelStream, startStream} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		records: state.BC.hasOwnProperty('payments') ? state.BC['payments'].records || []  : [],
		loaded: state.BC.hasOwnProperty('payments') ? state.BC['payments'].loaded || false  : false,
		isMobile: state.UI.isMobile
	}
};


const PaymentsTable = connect(mapStateToProps,{startStream, cancelStream})(PaymentsTableTableC);
export default 	PaymentsTable;

