import * as React from "react";
import {NavLink, PanelTable} from "../Styled/Table";
import TableHeader from "../TableData/TableHeader";
import TableBody from "../TableData/TableBody";
import Operation from "./OperationTypes/Operation";

const NavLinkAccount = ({account, index}) => (
		<NavLink key={`${index}-nav`} to={`/explorer/account/${account}`}>
			{account.substring(0,4)}
		</NavLink>
);




export const OperationsTable = ({doStream, limit, loaded, records, parentRenderTimestamp, startStream, cancelStream}) => {
	React.useEffect(() => {
		startStream("operations", limit);

		return () => {
			cancelStream("operations");
		}
	}, [cancelStream, startStream, limit]);

	React.useEffect(() => {
		console.log("OperationsTable Render")
	}, []);
	return (
		<PanelTable>
			<TableHeader data={["Account", "Operation","Transaction","Type", "Time", ""]}/>
			{loaded
				?
				<TableBody>
					{records.map((record, index) => (
						<Operation key={`${index}-op-data`} inde={index} op={record} parentRenderTimestamp={parentRenderTimestamp} compact={false}/>
					))}
				</TableBody>
				:
				null
			}
		</PanelTable>
	);
};

