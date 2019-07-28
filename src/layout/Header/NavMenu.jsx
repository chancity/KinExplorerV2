import {Wrapper,} from "./Styled/Navbar";
import React from 'react';
import {MobileNav} from "./MobileNav";
import {Nav} from "./Nav";
import Sidebar from "./Sidebar";


export const NavMenu = ({ open, toggleOpen, isMobile }) => {
	const [searchOpen, setSearchOpen] = React.useState(false);

	const toggleSearchOpen = () =>{
		setSearchOpen(!searchOpen);
	};

	return (
		<header>
			<Wrapper>
				<Nav searchOpen={searchOpen} isMobile={isMobile} toggleSearchOpen={toggleSearchOpen}/>
				<MobileNav open={open} toggleOpen={toggleOpen} isMobile={isMobile} toggleSearchOpen={toggleSearchOpen} style={{display: (isMobile ? "flex" : "none")}}/>
			</Wrapper>
			<Sidebar open={open} isMobile={isMobile} toggleOpen={toggleOpen}/>
		</header>
	);
};
