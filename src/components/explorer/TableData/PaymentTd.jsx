import * as React from "react";

const PaymentTd  = ({record, index}) => (
	<>
		<td key={`${index}-acc`}>
			{record.from.substr(0,4)}
		</td>
		<td key={`${index}-msg`}>
			Pay {record.amount} KIN to {record.to.substring(0,4)}
		</td>
		<td key={`${index}-time`}>
			{record.created_at}
		</td>
		<td key={`${index}-button`}>

		</td>
	</>
);

export default PaymentTd
