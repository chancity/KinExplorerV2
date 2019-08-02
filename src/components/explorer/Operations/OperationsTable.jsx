import * as React from "react";
import { PanelTable} from "../../../layout/Table";
import TableHeader from "../TableData/TableHeader";
import Operation from "./OperationTypes/Operation";
import WithSpinner from '../../shared/WithSpinner'
import OperationsTableBody from "../../../store/Blockchain/containers/OperationsTableBody";
import TableBody from "../TableData/TableBody";


const desktop = ["Account", "Operation","Transaction","Type", "Time"];
const mobile = ["Account", "Operation", "Time"];




export const OperationsTable = React.memo(props => {
	const {doStream, limit, loaded, startStream, cancelStream, isMobile} = props;



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

					<OperationsTableBody/>
				</TableBody>
			</PanelTable>
		</WithSpinner>
	);
});

