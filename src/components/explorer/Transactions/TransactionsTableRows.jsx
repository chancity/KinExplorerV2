import TransactionHash from "../../shared/TransactionHash";
import AppData from "../../shared/AppData";
import {NavLink} from "../../../layout/Table";
import TimeTd from "../TableData/TimeTd";
import * as React from "react";



const Row = ({op}) => {
	return(
		<tr>
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
	)
}
export const TransactionsTableRows = ({records}) => (
	<>
		{records.map((op) => (
			<Row op={op} key={op.id}/>
		))}
	</>
);
