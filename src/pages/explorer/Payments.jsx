import * as React from "react";
import {Title} from '../../layout/Title'
import {Panel} from "../../components/explorer/Styled/Panel";
import PaymentsTable from "../../store/Blockchain/containers/PaymentsTable";

export const Payments = () => (
	<>
		<Title>
			Payments
		</Title>
		<Panel>
			<PaymentsTable limit={25}/>
		</Panel>

	</>
);
