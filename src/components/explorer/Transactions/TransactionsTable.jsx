import * as React from "react";
import {NavLink, PanelTable} from "../../../layout/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import TimeTd from "../TableData/TimeTd";
import TransactionHash from "../../shared/TransactionHash";
import AppData from "../../shared/AppData";
import WithSpinner from '../../shared/WithSpinner'

export const TransactionsTable =  ({doStream, limit, loaded, records, startStream, cancelStream}) => {

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
					{records.map((op) => (
						<tr key={op.hash}>
							<td>
								<TransactionHash hash={op.hash} compact={true}/>
							</td>
							<td>
								<AppData memo={op.memo} compact={false}/>
							</td>
							<td>
								<NavLink to={`/explorer/ledgers/${op.ledgerAttr}`}>{op.ledgerAttr}</NavLink>
							</td>
							<td>
								<NavLink to={`/explorer/transactions/${op.id}`}>{op.operationCount}</NavLink>
							</td>
							<TimeTd render_time={op.parentRenderTimestamp} record_time={op.time}/>
						</tr>
					))}
				</TableBody>
			</PanelTable>
		</WithSpinner>
	);
};
