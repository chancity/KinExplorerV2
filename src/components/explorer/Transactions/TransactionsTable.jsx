import * as React from "react";
import {PanelTable} from "../../../layout/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import WithSpinner from '../../shared/WithSpinner'
import TransactionsTableRows from "../../../store/Blockchain/containers/TransactionsTableRows";




export const TransactionsTable =  ({doStream, limit, loaded, startStream, cancelStream}) => {

	React.useEffect(() => {
		startStream("transactions", limit, true);

		return () => {
			cancelStream("transactions");
		}
	}, [cancelStream, startStream, limit]);


	React.useEffect(() => {
		console.log("TransactionsTable Render")
	}, []);


	return (
		<WithSpinner loaded={loaded}>
			<PanelTable>
				<TableHeader data={["#", "AppId", "Ledger", "Ops", "Time"]}/>
				<TableBody>
					<TransactionsTableRows/>
				</TableBody>
			</PanelTable>
		</WithSpinner>
	);
};
