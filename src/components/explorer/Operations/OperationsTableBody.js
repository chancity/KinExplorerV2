import Operation from "./OperationTypes/Operation";
import * as React from "react";


const OperationWrapper = ({record, isMobile}) => {
	return (
			<Operation op={record} parentRenderTimestamp={record.parentRenderTimestamp} compact={isMobile}/>
	)
};
export const OperationsTableBody = ({records,isMobile}) => {

	return (
			<>
			{records.map((record) => (
					<OperationWrapper key={record.id} record={record}  isMobile={isMobile}/>
			))}
			</>
	)
};
