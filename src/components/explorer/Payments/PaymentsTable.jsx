import * as React from "react";
import { PanelTable} from "../../../layout/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import Operation from "../Operations/OperationTypes/Operation";
import WithSpinner from '../../shared/WithSpinner'



const desktop = ["Account", "Payment","Transaction", "Type", "Time"];
const mobile = ["Account", "Payment", "Time"];

export const PaymentsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream, isMobile}) => {
	React.useEffect(() => {
		startStream("payments", limit);

		return () => {
			cancelStream("payments");
		}
	}, [cancelStream, startStream, limit]);

	React.useEffect(() => {
		console.log("PaymentsTable Render")
	}, []);

	console.log(isMobile);
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

