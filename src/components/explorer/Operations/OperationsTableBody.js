import Operation from "./OperationTypes/Operation";
import * as React from "react";


export const OperationsTableBody = ({records,isMobile}) => {
	return (
			<>
			{records.map((record, index) => (
				<Operation key={record.bettaId} op={record} parentRenderTimestamp={record.parentRenderTimestamp} compact={isMobile}/>
			))}
			</>
	)
};
