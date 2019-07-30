import * as React from "react";
import {PanelTable} from "../../../pages/explorer/Styled/ExplorerBody";




const PaymentTd  = ({record}) => (
	<>
		<td>
			{record.from.substr(0,4)}
		</td>
		<td>
			Pay {record.amount} KIN to {record.to.substring(0,4)}
		</td>
		<td>
			{record.created_at}
		</td>
		<td>

		</td>
	</>
);


const CreateAccountTd = ({record}) => (
	<>
		<td>
			{record.funder.substring(0,4)}
		</td>
		<td>
			Created account {record.account.substring(0,4)} with balance {record.starting_balance}
		</td>
		<td>
			{record.created_at}
		</td>
		<td>

		</td>
	</>
);

const FormatedTd = ({record, index}) => (
	<tr>
		<td>{index}</td>
		{record.type_i === 0 ? <CreateAccountTd record={record}/> :  <PaymentTd record={record}/> }
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
