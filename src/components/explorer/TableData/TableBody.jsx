import * as React from "react";
import FormattedTd from "./TableDataRow";



const TableBody = ({records, parentRenderTimestamp}) => (
	<tbody>
		{records.map((record, index )=> (
			<FormattedTd key={index} record={record} index={index} parentRenderTimestamp={parentRenderTimestamp}/>
		))}
	</tbody>
);

export default TableBody;
