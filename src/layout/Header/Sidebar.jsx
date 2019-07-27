import {Menu, MenuInner, Section, SectionTitle, StyledLink} from "./Styled/Sidebar";
import React from 'react';



export const Sidebar = ({ open, isMobile, toggleOpen }) => {
	const display = open || !isMobile ? "translateX(0rem)" : "translateX(-9.6667rem)";
	const toggle = ()=>{
		if(isMobile)
			toggleOpen();
	}
	return (
		<Menu style={{ transform: display }}>
			<MenuInner>
				<Section>
					<SectionTitle>
						<StyledLink to={"/operations"} onClick={toggle}>
							Operations
						</StyledLink>
					</SectionTitle>
				</Section>
				<Section>
					<SectionTitle>
						<StyledLink to={"/ledgers"} onClick={toggle}>
							Ledgers
						</StyledLink>
					</SectionTitle>
				</Section>
				<Section>
					<SectionTitle>
						<StyledLink to={"/transactions"} onClick={toggle}>
							Transactions
						</StyledLink>
					</SectionTitle>
				</Section>
				<Section>
					<SectionTitle>
						<StyledLink to={"/effects"} onClick={toggle}>
							Effects
						</StyledLink>
					</SectionTitle>
				</Section>
				<Section>
					<SectionTitle>
						<StyledLink to={"/payments"} onClick={toggle}>
							Payments
						</StyledLink>
					</SectionTitle>
				</Section>
			</MenuInner>
		</Menu>
	);
};
