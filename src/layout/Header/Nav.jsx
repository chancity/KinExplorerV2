import {Normal, StartWrapper, EndWrapper, SocialWrapper} from "./Styled/Navbar";
import React from 'react';
import {Logo} from "../Logo";
import {NavLinks} from "./NavLinks";
import {SocialLinks} from "./SocialLinks";
import Search from "../../store/UI/containers/Search";





export const Nav = () => {
	return (
		<Normal>
			<StartWrapper>
				<Logo/>
				<NavLinks/>
			</StartWrapper>
			<EndWrapper>
				<Search/>
				<SocialWrapper>
					<SocialLinks/>
				</SocialWrapper>
			</EndWrapper>
		</Normal>
	);
};
