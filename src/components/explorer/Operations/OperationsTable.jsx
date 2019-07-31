import * as React from "react";
import { PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import Operation from "./OperationTypes/Operation";



export const OperationsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {
	React.useEffect(() => {
		startStream("operations", limit);

		return () => {
			cancelStream("operations");
		}
	}, [cancelStream, startStream, limit]);

	React.useEffect(() => {
		console.log("OperationsTable Render")
	}, []);
	return (
		<PanelTable>
			<TableHeader data={["Account", "Operation", "Time", ""]}/>
			{loaded
				?
				<TableBody>
					{records.map((record, index) => (
						<Operation key={index} op={record} parentRenderTimestamp={parentRenderTimestamp} compact={true}/>
					))}
				</TableBody>
				:
				null
			}
		</PanelTable>
	);
};

