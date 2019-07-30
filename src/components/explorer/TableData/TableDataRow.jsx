import * as React from "react";
import PaymentTd from "./PaymentTd";
import CreateAccountTd from "./CreateAccountTd";


const getTd = (record, index) => {
	switch (record.type_i) {
		case 0:
			return <CreateAccountTd record={record} index={index} key={`${index}-cra`}/>;
		case 1:
			return <PaymentTd record={record} index={index} key={`${index}-pay`}/>;
		default:
			return null
	}
};

const TableDataRow = ({record, index}) =>(
	<tr key={`${index}-tr`}>
		{ getTd(record, index) }
	</tr>
);

export default TableDataRow


