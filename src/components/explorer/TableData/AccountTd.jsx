import * as React from "react";
import {FormattedRelative} from "react-intl";
import {NavLink} from "../Styled/Table";
import {PanelHeader} from "../Styled/Panel";


const AccountTd = ({account, index}) => (
	<td key={`${index}-acc`}>
		<NavLink key={`${index}-accnav`} to={`/explorer/account/${account}`}>{account.substring(0,4)}</NavLink>
	</td>
);

export default AccountTd;
