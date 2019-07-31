import * as React from "react";
import {Title} from '../../layout/Title'
import OperationsTable from "../../store/Blockchain/containers/OperationsTable";
import {Panel} from "../../components/explorer/Styled/Panel";

export const Operations = () => (
	<>
		<Title>
			Operations
		</Title>
		<Panel>
			<OperationsTable limit={25}/>
		</Panel>
	</>
);
