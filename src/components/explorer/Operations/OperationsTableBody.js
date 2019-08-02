import Operation from "./OperationTypes/Operation";
import * as React from "react";


const Row = ({record, isMobile}) => {
	return(
		<Operation op={record} parentRenderTimestamp={record.parentRenderTimestamp} compact={isMobile}/>
	)
}

export const OperationsTableBody = ({records,isMobile}) => {
	return (
		<>
			{records.map((record) => (
				<Row record={record} key={record.id} isMobile={isMobile}/>
			))}
		</>
	)
};
