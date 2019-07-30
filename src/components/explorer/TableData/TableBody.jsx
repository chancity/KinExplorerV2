import * as React from "react";
import FormattedTd from "./TableDataRow";



const TableBody = ({records}) => (
	<tbody>
		{records.map((record, index )=> (
			<FormattedTd key={index} record={record} index={index}/>
		))}
	</tbody>
);

export default TableBody;
