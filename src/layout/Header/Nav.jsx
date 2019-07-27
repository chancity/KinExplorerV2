import {Normal, StartWrapper, EndWrapper, SocialWrapper} from "./Styled/Navbar";
import React from 'react';
import {Logo} from "../Logo";
import {NavLinks} from "./NavLinks";
import {SocialLinks} from "./SocialLinks";
import {Search} from "./Search";





export const Nav = ({style, searchOpen,isMobile, toggleSearchOpen}) => {
	return (
		<Normal style={style}>
			<StartWrapper>
				<Logo/>
				<NavLinks/>
			</StartWrapper>
			<EndWrapper>
				<Search searchOpen={searchOpen} isMobile={isMobile} toggleSearchOpen={toggleSearchOpen}/>
				<SocialWrapper>
					<SocialLinks/>
				</SocialWrapper>
			</EndWrapper>
		</Normal>
	);
};
