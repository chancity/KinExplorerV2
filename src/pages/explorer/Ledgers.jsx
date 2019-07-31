import * as React from "react";
import {Title} from '../../layout/Title'
import {Panel} from "../../components/explorer/Styled/Panel";
import LedgersTable from "../../store/Blockchain/containers/LedgersTable";

export const Ledgers = () => (
	<>
		<Title>
			Ledgers
		</Title>
		<Panel>
			<LedgersTable limit={25}/>
		</Panel>
	</>
);
