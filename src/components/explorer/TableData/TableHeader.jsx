import * as React from "react";



const TableHeader = ({data}) => (
	<thead>
		<tr>
			{data.map((value, index) => (
				<th key={index}>
					{value}
				</th>
			))}
		</tr>
	</thead>
);

export default TableHeader;
