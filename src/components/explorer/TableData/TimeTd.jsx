import * as React from "react";
import {FormattedRelative} from "react-intl";


const TimeTd = ({index, record_time, render_time}) => (
	<td key={`${index}-time`}>
		<FormattedRelative
			key={`${index}-frtime`}
			updateInterval={1}
			initialNow={render_time}
			value={record_time}
		/>
	</td>
);

export default TimeTd;
