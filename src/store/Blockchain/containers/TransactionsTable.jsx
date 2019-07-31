import { connect } from 'react-redux'
import {TransactionsTable as TransactionsTableC} from "../../../components/explorer/Transactions/TransactionsTable";
import {cancelStream, startStream} from "../thunk";

const mapStateToProps = (state)=> {
	return {
		records: state.BC.hasOwnProperty('transactions') ? state.BC['transactions'].records || []  : [],
		loaded: state.BC.hasOwnProperty('transactions') ? state.BC['transactions'].loaded || false  : false,
		parentRenderTimestamp: state.BC.hasOwnProperty('transactions') ? state.BC['transactions'].parentRenderTimestamp || new Date()  : new Date(),
	}
};


const TransactionsTable = connect(mapStateToProps,{startStream, cancelStream})(TransactionsTableC);
export default 	TransactionsTable;

