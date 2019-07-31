import * as React from "react";
import {NavLink, PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import TimeTd from "../TableData/TimeTd";

export const LedgersTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {

	React.useEffect(() => {
		startStream("ledgers", limit, false);

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
					{records.map((op) => (
						<tr key={op.id}>
							<td>
								<NavLink to={`/explorer/ledgers/${op.sequence}`}>{op.sequence}</NavLink>
							</td>
							<td>
								{op.transactionCount}
							</td>
							<TimeTd render_time={parentRenderTimestamp} record_time={op.time}/>
						</tr>
					))}
				</TableBody>
			:
				null
			}
		</PanelTable>
	);
};
