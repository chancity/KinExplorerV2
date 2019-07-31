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
	React.useEffect(() => {
		console.log("LedgersTable Render")
	}, []);
	return (

		<PanelTable>
			<TableHeader data={["#", "Transactions", "Time"]}/>
			{loaded
			?
				<TableBody>
					{records.map((op,index) => (
						<tr key={`${index}-ledeger-tr`}>
							<td key={`${index}-navlink`}>
								<NavLink to={`/explorer/ledgers/${op.sequence}`}>{op.sequence}</NavLink>
							</td>
							<td key={`${index}-tx-count`}>
								{op.transactionCount}
							</td>
							<TimeTd id={index} key={`${index}-time`} render_time={parentRenderTimestamp} record_time={op.time}/>
						</tr>
					))}
				</TableBody>
			:
				null
			}
		</PanelTable>
	);
};
