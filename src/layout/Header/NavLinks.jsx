import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
import {Seperator} from "./Styled/Navbar";


export const NavLinks = () => {
	return (
		<Wrapper>
			<NavLink to={"/my-profile"}>
				Profile
			</NavLink>
			<Seperator/>
			<NavLink to={"/leaderboards"}>
				Leaderboards
			</NavLink>
			<Seperator/>
			<NavLink to={"/store"}>
				Store
			</NavLink>
		</Wrapper>
	);
};
