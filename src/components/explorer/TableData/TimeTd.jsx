import * as React from "react";
import {FormattedRelative} from "react-intl";


const TimeTd = ({id, record_time, render_time}) => (
	<td key={`${id}-time-td`}>
		<FormattedRelative
			updateInterval={1}
			initialNow={render_time}
			value={record_time}
			key={`${id}-time-data`}
		/>
	</td>
);

export default TimeTd;
