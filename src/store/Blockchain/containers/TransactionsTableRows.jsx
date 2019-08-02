import { connect } from 'react-redux'
import {TransactionsTableRows as TransactionsTableRowsC} from "../../../components/explorer/Transactions/TransactionsTableRows";

const mapStateToProps = (state)=> {
	return {
		records: state.BC.hasOwnProperty('transactions') ? state.BC['transactions'].records || []  : [],
	}
};


const TransactionsTableRows = connect(mapStateToProps,null)(TransactionsTableRowsC);
export default 	TransactionsTableRows;

