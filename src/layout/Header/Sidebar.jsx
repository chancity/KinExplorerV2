import {Menu, MenuInner, Section, SectionTitle, StyledLink} from "./Styled/Sidebar";
import React from 'react';
import {withRouter} from "react-router-dom";
import navOptions from "./NavOptions";

const Sidebar = ({ open, isMobile, toggleOpen, location }) => {
	const [display, setDisplay] = React.useState("translateX(0rem)");
	const [navItems, setNavItems] = React.useState([]);
	const [path, setPath] = React.useState(null);

	React.useEffect(() =>{
		const rootPath = location.pathname.split("/");

		if(rootPath.length >= 2){
			const path = rootPath[1];

			if(navOptions.hasOwnProperty(path)){
				setNavItems(navOptions[path]);
				setPath(path);
			} else {
				setNavItems([]);
				setPath(null);
			}
		}
	}, [location.pathname]);

	React.useEffect(() =>{
		setDisplay((open || !isMobile) && navItems.length > 0 ? "translateX(0rem)" : "translateX(-9.6667rem)")
	}, [isMobile, open, navItems]);

	const toggle = ()=>{
		if(isMobile)
			toggleOpen();
	};

	return (
		<Menu style={{ transform: display }}>
			<MenuInner>
				{navItems.map((value, index)=>(
					<Section key={index}>
						<SectionTitle>
							<StyledLink to={`/${path}/${value.path}`} onClick={toggle} exact activeClassName="navActive">
								{value.text}
							</StyledLink>
						</SectionTitle>
					</Section>
				))}
			</MenuInner>
		</Menu>
	);
};

export default withRouter(Sidebar);
