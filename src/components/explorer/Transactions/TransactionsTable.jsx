import * as React from "react";
import {NavLink, PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import TimeTd from "../TableData/TimeTd";
import TransactionHash from "../../shared/TransactionHash";

export const TransactionsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {

	React.useEffect(() => {
		startStream("transactions", limit);

		return () =>{
			cancelStream("transactions");
		}
	}, [cancelStream, startStream, limit]);

	return (

		<PanelTable>
			<TableHeader data={["#", "Ledger", "Ops", "Time"]}/>
			{loaded
			?
				<TableBody>
					{records.map((op, index) => (
						<tr key={index}>
							<td>
								<TransactionHash hash={op.hash} compact={true} />
							</td>
							<td key={`${index}-ledger`}>
								<NavLink to={`/explorer/ledgers/${op.ledgerAttr}`}>{op.ledgerAttr}</NavLink>
							</td>
							<td key={`${index}-ops-count`}>
								<NavLink to={`/explorer/transactions/${op.id}`}>{op.operationCount}</NavLink>
							</td>
							<TimeTd index={index} render_time={parentRenderTimestamp} record_time={op.time}/>
						</tr>
					))}
				</TableBody>
			:
				null
			}
		</PanelTable>
	);
};
