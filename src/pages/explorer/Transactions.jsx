import * as React from "react";
import {Title} from '../../layout/Title'
import {Panel} from "../../layout/Panel";
import TransactionsTable from "../../store/Blockchain/containers/TransactionsTable";

export const Transactions = () => (
	<>
		<Title>
			Transactions
		</Title>
		<Panel>
			<TransactionsTable limit={25}/>
		</Panel>
	</>
);
