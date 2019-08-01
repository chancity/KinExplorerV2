import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
import {Seperator} from "./Styled/Navbar";


export const NavLinks = ({onClick}) => {
	return (
		<Wrapper>
			{/*<NavLink to={"/my-kin-wallet"} onClick={onClick} activeClassName={"navActive"}>
				My Kin Wallet
			</NavLink>*/}
			<Seperator/>
			<NavLink to={"/apps"} onClick={onClick} activeClassName={"navActive"}>
				Apps
			</NavLink>
			<Seperator/>
			{/*<NavLink to={"/stats"} onClick={onClick} activeClassName={"navActive"}>
				Stats
			</NavLink>*/}
		</Wrapper>
	);
};
