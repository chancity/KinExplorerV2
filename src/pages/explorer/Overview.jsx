import * as React from "react";
import {Title} from '../../layout/Title'
import {BodyGrid, SideWrapper} from "./Styled/ExplorerBody";
import OperationsTable from "../../store/Blockchain/containers/OperationsTable";
import {Panel, PanelHeader} from "../../components/explorer/Styled/Panel";
import {NavLink} from "../../components/explorer/Styled/Table";
import LedgersTable from "../../store/Blockchain/containers/LedgersTable";
import TransactionsTable from "../../store/Blockchain/containers/TransactionsTable";



const OverviewPanelHeader = ({children, title, link, linkDesc = "View All", className}) =>(
	<Panel className={className}>
		<PanelHeader>
			<span>{title}</span>
			<NavLink style={{float:"right"}} to={link}>{linkDesc}</NavLink>
		</PanelHeader>
		{children}
	</Panel>
);

export const Overview = () => {
	React.useEffect(() => {
		console.log("mounted")
	}, []);
	return(
		<>
			<Title>
				Overview
			</Title>
			<BodyGrid>

					<OverviewPanelHeader title={"Latest Operations"} link={"/explorer/operations"} className={"main"}>
						<OperationsTable limit={25}/>
					</OverviewPanelHeader>
				<SideWrapper className={"child"}>
					<OverviewPanelHeader title={"Latest Transactions"} link={"/explorer/transactions"}>
						<TransactionsTable limit={10}/>
					</OverviewPanelHeader>
					<OverviewPanelHeader title={"Latest Ledgers"} link={"/explorer/ledgers"}>
						<LedgersTable limit={10}/>
					</OverviewPanelHeader>
				</SideWrapper>
			</BodyGrid>
		</>
	);
};
