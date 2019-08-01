import * as React from "react";
import { PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import Operation from "../Operations/OperationTypes/Operation";
import WithSpinner from '../../shared/WithSpinner'



const headers = ["Account", "Payment","Transaction", "Type", "Time"];

export const PaymentsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {
	React.useEffect(() => {
		startStream("payments", limit);

		return () => {
			cancelStream("payments");
		}
	}, [cancelStream, startStream, limit]);

	React.useEffect(() => {
		console.log("PaymentsTable Render")
	}, []);
	return (
		<WithSpinner loaded={loaded}>
			<PanelTable>
				<TableHeader data={headers}/>
				<TableBody>
					{records.map((record, index) => (
						<Operation key={index} op={record} parentRenderTimestamp={parentRenderTimestamp} compact={false}/>
					))}
				</TableBody>
			</PanelTable>
		</WithSpinner>
	);
};

