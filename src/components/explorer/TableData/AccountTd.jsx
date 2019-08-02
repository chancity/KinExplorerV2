import * as React from "react";
import {NavLink} from "../../../layout/Table";


const AccountTd = ({account}) => (
	<td>
		<NavLink to={`/explorer/account/${account}`}>{account.substring(0,4)}</NavLink>
	</td>
);

export default AccountTd;
