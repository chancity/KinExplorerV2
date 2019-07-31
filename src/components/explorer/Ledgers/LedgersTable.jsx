import * as React from "react";
import {NavLink, PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import TimeTd from "../TableData/TimeTd";

export const LedgersTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {

	React.useEffect(() => {
		startStream("ledgers", limit);

		return () =>{
			cancelStream("ledgers");
		}
	}, [cancelStream, startStream, limit]);

	return (

		<PanelTable>
			<TableHeader data={["#", "Transactions", "Time"]}/>
			{loaded
			?
				<TableBody>
					{records.map((record, index) => (
						<tr key={index}>
							<td key={`${index}-seq`}>
								<NavLink to={`/explorer/ledgers/${record.sequence}`}>{record.sequence}</NavLink>
							</td>
							<td key={`${index}-tx-count`}>
								{record.transaction_count}
							</td>
							<TimeTd index={index} render_time={parentRenderTimestamp} record_time={record.closed_at}/>
						</tr>
					))}
				</TableBody>
			:
				null
			}
		</PanelTable>
	);
};
