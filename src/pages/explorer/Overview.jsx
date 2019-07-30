import * as React from "react";
import {Title} from '../../layout/Title'
import {BodyGrid, MainWrapper, Panel, PanelHeader, PanelTable, SideWrapper} from "./Styled/ExplorerBody";
import OperationsTable from "../../store/Blockchain/containers/OperationsTable";

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
				<MainWrapper>
					<Panel>
						<PanelHeader>
							<span>Last Operations</span>
							<a style={{float:"right"}}>View All</a>
						</PanelHeader>
						<OperationsTable/>
					</Panel>
				</MainWrapper>
				<SideWrapper>
					<Panel>
						<PanelHeader>
							<span>Last Transactions</span>
							<a style={{float:"right"}}>View All</a>
						</PanelHeader>
						<PanelTable>

						</PanelTable>
					</Panel>
					<Panel>
						<PanelHeader>
							<span>Last Ledgers</span>
							<a style={{float:"right"}}>View All</a>
						</PanelHeader>
						<PanelTable>

						</PanelTable>
					</Panel>
				</SideWrapper>
			</BodyGrid>
		</>
	);
}
