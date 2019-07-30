import * as React from "react";
import {FormattedRelative} from "react-intl";

const CreateAccountTd = ({record, index, parentRenderTimestamp}) => (
	<>
		<td key={`${index}-acc`}>
			{record.funder.substring(0,4)}
		</td>
		<td key={`${index}-msg`}>
			Created account {record.account.substring(0,4)} with balance {record.starting_balance}
		</td>
		<td key={`${index}-time`}>
			<FormattedRelative
				initialNow={parentRenderTimestamp}
				value={record.created_at}
			/>
		</td>
		<td key={`${index}-button`}>

		</td>
	</>
);

export default CreateAccountTd
