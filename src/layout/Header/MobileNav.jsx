import {ArrowWrapper, Button, Wrapper, SecondaryMenu, SecondaryMenuItem} from "./Styled/MobileNavbar";
import { ReactComponent as CloseSvg } from '../../static/images/layout/menu-close.svg';
import { ReactComponent as OpenSvg } from '../../static/images/layout/menu-open.svg';
import { ReactComponent as ArrowSvg } from '../../static/images/layout/menu-arrow.svg';
import { ReactComponent as SearchSvg } from '../../static/images/layout/menu-search.svg';
import React from "react";
import {Logo} from "../Logo";
import {NavLinks} from "./NavLinks";
import {SocialLinks} from "./SocialLinks";
import {SocialWrapper} from "./Styled/Navbar";

const OpenButtonStyle = {
	background: "rgba(0, 0, 0, 0.07)"
};

export const ButtonWrapper = ({children, onClick, open}) => {
	return(
		<Button onClick={onClick} style={open ? OpenButtonStyle : undefined}>
			{children}
		</Button>
	)
};
const ArrowWrapperStyle = {
	transformOrigin: "center center",
	transform: "rotate(180deg)",
	transition: "transform 0.2s ease 0s"
}
export const MobileNav = ({open, toggleOpen, isMobile, style, toggleSearchOpen}) => {
	const [secondaryOpen, setSecondaryOpen] = React.useState(false);

	React.useEffect(() => {
		if(!isMobile) {
			setSecondaryOpen(false);
		}


	},[isMobile]);

	React.useEffect(() => {
		if(open && secondaryOpen) {
			toggleOpen();
		}


	},[secondaryOpen]);


	React.useEffect(() => {
		if(open && secondaryOpen) {
			setSecondaryOpen(!secondaryOpen);
		}


	},[open]);

	const onSecondaryOpen = () => {
		setSecondaryOpen(!secondaryOpen);
	};

	return (
		<Wrapper style={style}>
			<ButtonWrapper onClick={toggleOpen} open={open}>
				{open ? <CloseSvg/> : <OpenSvg/>}
			</ButtonWrapper>
			<Logo/>
			<div style={{ display: "inline-block",	justifyContent: "flex-end",	float: "right", backGroundColor:"transparent"}}>
				<ButtonWrapper  onClick={toggleSearchOpen}>
					<SearchSvg style={{fill:"white", width: "1.55556rem", height: "1.55556rem"}}/>
				</ButtonWrapper>
				<ButtonWrapper onClick={onSecondaryOpen} open={secondaryOpen}>
					<ArrowWrapper style={secondaryOpen ? ArrowWrapperStyle : null}>
						<ArrowSvg style={{fill:"white", width: "2rem", height: "2rem"}}/>
					</ArrowWrapper>
				</ButtonWrapper>
			</div>
			<SecondaryMenu open={secondaryOpen}>
				<NavLinks onClick={onSecondaryOpen}/>
				<SecondaryMenuItem>
					<SocialLinks/>
				</SecondaryMenuItem>
			</SecondaryMenu>


		</Wrapper>
	)
};

