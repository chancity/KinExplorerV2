import { Wrapper, NavLink } from "./Styled/NavLinks";
import React from 'react';
import {Seperator} from "./Styled/Navbar";


export const NavLinks = () => {
	return (
		<Wrapper>
			<NavLink to={"/my-kin-wallet"}>
				My Kin Wallet
			</NavLink>
			<Seperator/>
			<NavLink to={"/register-your-app"}>
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
