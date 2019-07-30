import * as React from "react";
import {PanelTable} from "../../../pages/explorer/Styled/ExplorerBody";




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

const FormatedTd = ({record, index}) => (
	<tr key={`${index}-tr`}>
		{record.type_i === 0 ? <CreateAccountTd record={record} index={index} key={`${index}-cra`}/> :  <PaymentTd record={record} index={index} key={`${index}-pay`}/> }
	</tr>
);

export const OperationsTable = ({doStream, limit,loaded, records, startStream, cancelStream}) => {

	React.useEffect(() => {
		startStream("operations");

		return () =>{
			cancelStream("operations");
		}
	}, [cancelStream, startStream]);


	return (
		<PanelTable>
			<thead>
				<tr>
					<td>
						Account
					</td>
					<td>
						Operation
					</td>
					<td>
						Time
					</td>
					<td>
					</td>
				</tr>
			</thead>
			<tbody>
			{loaded &&
				<>
				{records.map((record, index )=> (
					<FormatedTd key={index} record={record} index={index}/>
				))}
				</>
			}
			</tbody>
		</PanelTable>
	);
};
