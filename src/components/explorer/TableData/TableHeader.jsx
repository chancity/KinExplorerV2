import * as React from "react";



const TableHeader = ({data}) => (
	<thead>
		<tr>
			{data.map((value, index) => (
				<td key={index}>
					{value}
				</td>
			))}
		</tr>
	</thead>
);

export default TableHeader;
