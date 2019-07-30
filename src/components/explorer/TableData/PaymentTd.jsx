import * as React from "react";
import {FormattedRelative} from "react-intl";

const PaymentTd  = ({record, index, parentRenderTimestamp}) => (
	<>
		<td key={`${index}-acc`}>
			{record.from.substr(0,4)}
		</td>
		<td key={`${index}-msg`}>
			Pay {record.amount} KIN to {record.to.substring(0,4)}
		</td>
		<td key={`${index}-time`}>
			<FormattedRelative
				initialNow={parentRenderTimestamp}
				value={record.created_at}
			/>
			{/*{record.created_at}*/}
		</td>
		<td key={`${index}-button`}>

		</td>
	</>
);

export default PaymentTd
