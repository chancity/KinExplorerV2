import * as React from "react";
import {NavLink, PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import TimeTd from "../TableData/TimeTd";

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
					{records.map((record, index) => (
						<tr key={index}>
							<td key={`${index}-id`}>
								<NavLink to={`/explorer/transactions/${record.id}`}>{record.id.substring(0,7)}</NavLink>
							</td>
							<td key={`${index}-ledger`}>
								<NavLink to={`/explorer/ledgers/${record.ledger_attr}`}>{record.ledger_attr}</NavLink>
							</td>
							<td key={`${index}-ops-count`}>
								<NavLink to={`/explorer/transactions/${record.id}`}>{record.operation_count}</NavLink>
							</td>
							<TimeTd index={index} render_time={parentRenderTimestamp} record_time={record.created_at}/>
						</tr>
					))}
				</TableBody>
			:
				null
			}
		</PanelTable>
	);
};
