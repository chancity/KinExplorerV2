import {Wrapper,} from "./Styled/Navbar";
import React from 'react';
import {Nav} from "./Nav";
import MobileNav from "../../store/UI/containers/MobileNav";
import Sidebar from "../../store/UI/containers/Sidebar";



export const NavMenu = ({isMobile}) => {

	return (
		<header>
			<Wrapper>
				<Nav/>
				<MobileNav style={{display: (isMobile ? "flex" : "none")}}/>
			</Wrapper>
			<Sidebar/>
		</header>
	);
};
