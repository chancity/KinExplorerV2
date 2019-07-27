import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
import {Seperator} from "./Styled/Navbar";


export const NavLinks = ({onClick}) => {
	return (
		<Wrapper>
			<NavLink to={"/my-kin-wallet"} onClick={onClick}>
				My Kin Wallet
			</NavLink>
			<Seperator/>
			<NavLink to={"/register-your-app"} onClick={onClick}>
				Register Your App
			</NavLink>
		</Wrapper>
	);
};


//<Seperator/>
//<NavLink to={"/leaderboards"}>
//	Link 2
//</NavLink>
//<Seperator/>
//<NavLink to={"/store"}>
//	Link 3
//</NavLink>
