import * as React from "react";
import { PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import Operation from "./OperationTypes/Operation";



const desktop = ["Account", "Operation","Transaction","Type", "Time"];
const mobile = ["Account", "Operation", "Time"];

export const OperationsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream, isMobile}) => {
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
			<TableHeader data={isMobile ? mobile : desktop}/>
			{loaded
				?
				<TableBody>
					{records.map((record, index) => (
						<Operation key={index} op={record} parentRenderTimestamp={parentRenderTimestamp} compact={isMobile}/>
					))}
				</TableBody>
				:
				null
			}
		</PanelTable>
	);
};

