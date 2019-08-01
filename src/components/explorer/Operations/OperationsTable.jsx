import * as React from "react";
import { PanelTable} from "../../../layout/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import Operation from "./OperationTypes/Operation";
import WithSpinner from '../../shared/WithSpinner'



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
		<WithSpinner loaded={loaded}>
			<PanelTable>
				<TableHeader data={isMobile ? mobile : desktop}/>
					<TableBody>
						{records.map((record, index) => (
							<Operation key={index} op={record} parentRenderTimestamp={parentRenderTimestamp} compact={isMobile}/>
						))}
					</TableBody>
			</PanelTable>
		</WithSpinner>
	);
};

