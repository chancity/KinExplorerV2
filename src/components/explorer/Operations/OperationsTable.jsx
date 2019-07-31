import * as React from "react";
import {NavLink, PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import AccountTd from "../TableData/AccountTd";
import TimeTd from "../TableData/TimeTd";
import ButtonTd from "../TableData/ButtonTd";

const MessageTd = ({record, index}) => {
	const [msg, setMsg] = React.useState(null);

	React.useEffect(() => {

		switch (record.type_i) {
			case 0:
				setMsg(<>Created account <NavLink to={`/explorer/account/${record.account}`}>{record.account.substring(0,4)}</NavLink> with starting balance {record.starting_balance}</>);
				break;
			case 1:
				setMsg(<>Paid {record.amount} KIN to <NavLink to={`/explorer/account/${record.to}`}>{record.to.substring(0,4)}</NavLink></>);
				break;
			default:
				setMsg(null)
		}

	},[record.type_i, record.paging_token]);

	return (
		<td key={`${index}-msg`}>
			{msg}
		</td>
	);
};

export const OperationsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {


	React.useEffect(() => {
		startStream("operations", limit);

		return () => {
			cancelStream("operations");
		}
	}, [cancelStream, startStream, limit]);


	return (
		<PanelTable>
			<TableHeader data={["Account", "Operation", "Time", ""]}/>
			{loaded
				?
				<TableBody>
					{records.map((record, index) => (
						<tr key={`${index}-tr`}>
							<AccountTd key={index} account={record.from || record.funder}/>
							<MessageTd index={index} record={record}/>
							<TimeTd index={index} record_time={record.created_at} render_time={parentRenderTimestamp}/>
							<ButtonTd index={index}/>
						</tr>
					))}
				</TableBody>
				:
				null
			}
		</PanelTable>
	);
};

