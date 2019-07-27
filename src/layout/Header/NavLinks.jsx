import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
import {Seperator} from "./Styled/Navbar";


export const NavLinks = () => {
	return (
		<Wrapper>
			<NavLink to={"/my-profile"}>
				Link 1
			</NavLink>
			<Seperator/>
			<NavLink to={"/leaderboards"}>
				Link 2
			</NavLink>
			<Seperator/>
			<NavLink to={"/store"}>
				Link 3
			</NavLink>
		</Wrapper>
	);
};
