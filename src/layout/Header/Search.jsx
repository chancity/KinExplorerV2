import {Label, Header, Modal, Overlay, Wrapper,Input, PreShit} from "./Styled/Search";
import React from "react";
import { ReactComponent as SearchSvg } from '../../static/images/layout/menu-search.svg';
import { ReactComponent as CloseSvg } from '../../static/images/layout/menu-close.svg';
export const Search = ({searchOpen,isMobile, toggleSearchOpen}) =>(
	<>
		<Header searchOpen={searchOpen && isMobile}>
			<button onClick={toggleSearchOpen}>
				<CloseSvg />
			</button>
		</Header>
		<Overlay searchOpen={searchOpen || !isMobile}>
			<Modal searchOpen={searchOpen || !isMobile}>
				<div>
				<Wrapper>
					<Label>
						<SearchSvg style={{fill:"white",  width: "1.44444rem", height: "1.44444rem"}}/>
					</Label>
					<span style={{position: "relative", display: "inline-block", direction: "ltr",  width: "100%"}}>
						<Input placeholder={"Search..."}>

						</Input>
						<PreShit/>
					</span>
				</Wrapper>
				</div>
			</Modal>
		</Overlay>
		</>
);
