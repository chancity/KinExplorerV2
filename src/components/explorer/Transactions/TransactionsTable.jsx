import * as React from "react";
import {NavLink, PanelTable} from "../../../layout/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import TimeTd from "../TableData/TimeTd";
import TransactionHash from "../../shared/TransactionHash";
import AppData from "../../shared/AppData";
import WithSpinner from '../../shared/WithSpinner'

export const TransactionsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {

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
					{records.map((op, index) => (
						<tr key={`${index}-tx-tr`}>
							<td key={`${index}-tx-hash`}>
								<TransactionHash hash={op.hash} compact={true}/>
							</td>
							<td key={`${index}-tx-memo`}>
								<AppData memo={op.memo} compact={false}/>
							</td>
							<td key={`${index}-tx-navlink-td-ledger`}>
								<NavLink key={`${index}-tx-navlink-ledger`}
								         to={`/explorer/ledgers/${op.ledgerAttr}`}>{op.ledgerAttr}</NavLink>
							</td>
							<td key={`${index}-tx-navlink-td-ledger-tx`}>
								<NavLink key={`${index}-tx-navlink-td-ledger-tx1`}
								         to={`/explorer/transactions/${op.id}`}>{op.operationCount}</NavLink>
							</td>
							<TimeTd key={`${index}-tx-navlink-time`} render_time={parentRenderTimestamp}
							        record_time={op.time}/>
						</tr>
					))}
				</TableBody>
			</PanelTable>
		</WithSpinner>
	);
};
