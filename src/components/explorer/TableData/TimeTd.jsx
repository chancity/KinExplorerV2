import * as React from "react";
import {FormattedRelative} from "react-intl";


const TimeTd = ({record_time, render_time}) => (
	<td>
		<FormattedRelative
			updateInterval={5}
			initialNow={render_time}
			value={record_time}
		/>
	</td>
);

export default TimeTd;
