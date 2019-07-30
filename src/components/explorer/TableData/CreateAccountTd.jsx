import * as React from "react";

const CreateAccountTd = ({record, index}) => (
	<>
		<td key={`${index}-acc`}>
			{record.funder.substring(0,4)}
		</td>
		<td key={`${index}-msg`}>
			Created account {record.account.substring(0,4)} with balance {record.starting_balance}
		</td>
		<td key={`${index}-time`}>
			{record.created_at}
		</td>
		<td key={`${index}-button`}>

		</td>
	</>
);

export default CreateAccountTd
