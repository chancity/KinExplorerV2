import * as React from "react";
import {PanelTable} from "../../../pages/explorer/Styled/ExplorerBody";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";

export const OperationsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {

	React.useEffect(() => {
		startStream("operations");

		return () =>{
			cancelStream("operations");
		}
	}, [cancelStream, startStream]);

	return (
		<PanelTable>
			<TableHeader data={["Account", "Operation", "Time", ""]}/>
			{loaded &&
				<TableBody records={records} parentRenderTimestamp={parentRenderTimestamp}/>
			}
		</PanelTable>
	);
};
