import {Label, Header, Modal, Overlay, Wrapper,Input, PreShit} from "./Styled/Search";
import React from "react";
import { ReactComponent as SearchSvg } from '../../static/images/layout/menu-search.svg';
import { ReactComponent as CloseSvg } from '../../static/images/layout/menu-search-close.svg';

const searchCloseStyle = {
	width: "1.55556rem",
	height: "1.55556rem"
};
const searchOpenStyle = {
	width: "1.44444rem",
	height: "1.44444rem"
};
export const Search = ({searchOpen,isMobile, toggleSearchOpen}) =>{
	const svgStyle = searchOpen && isMobile ? searchOpenStyle : searchCloseStyle;


	return(
	<>
		<Header searchOpen={searchOpen && isMobile}>
			<button onClick={toggleSearchOpen}>
				<CloseSvg fill="white" style={svgStyle}/>
			</button>
		</Header>
		<Overlay searchOpen={searchOpen || !isMobile}>
			<Modal searchOpen={searchOpen || !isMobile}>
				<div>
				<Wrapper>
					<Label>
						<SearchSvg style={svgStyle}/>
					</Label>
					<span style={{position: "relative", display: "inline-block", direction: "ltr",  width: "100%"}}>
						<Input placeholder={"Search by Account / Transaction / ..."} autofocus="true">

						</Input>
						<PreShit/>
					</span>
				</Wrapper>
				</div>
			</Modal>
		</Overlay>
		</>
	)
};
