import { Menu, MenuInner} from "./Styled/Sidebar";
import React from 'react';



export const Sidebar = ({ open, isMobile }) => {
	const display = open || !isMobile ? "initial" : "none";
	return (
		<Menu style={{ display: display }}>
			<MenuInner>

			</MenuInner>
		</Menu>
	);
};
