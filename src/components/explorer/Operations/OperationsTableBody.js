import Operation from "./OperationTypes/Operation";
import * as React from "react";


export const OperationsTableBody = React.memo(props => {
	const {records, parentRenderTimestamp,isMobile} = props;
	return (
		<>
			{records.map((record, index) => (
				<Operation key={index} op={record} parentRenderTimestamp={parentRenderTimestamp} compact={isMobile}/>
			))}
		</>
	)
});
