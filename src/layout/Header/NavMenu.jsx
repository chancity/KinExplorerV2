import {NavHeader, Wrapper,} from "./Styled/Navbar";
import React from 'react';
import {Nav} from "./Nav";
import MobileNav from "../../store/UI/containers/MobileNav";
import Sidebar from "../../store/UI/containers/Sidebar";



export const NavMenu = () => {

	return (
		<NavHeader>
			<Wrapper>
				<Nav/>
				<MobileNav/>
			</Wrapper>
			<Sidebar/>
		</NavHeader>
	);
};
