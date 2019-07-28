import {Menu, MenuInner, Section, SectionTitle, StyledLink} from "./Styled/Sidebar";
import React from 'react';
import {withRouter} from "react-router-dom";
import navOptions from "./NavOptions";

const Sidebar = ({ open, isMobile, toggleOpen,  location }) => {
	const [navItems, setNavItems] = React.useState([]);
	const [path, setPath] = React.useState(null);
	const display = open || !isMobile;


	React.useEffect(() =>{
		const rootPath = location.pathname.split("/");
		let path;

		path = rootPath[1];

		if(navOptions.hasOwnProperty(path)){
			setNavItems(navOptions[path]);
			setPath(`${path}`);
		} else {
			setNavItems([]);
			setPath(null);
		}
	}, [location.pathname]);


	const toggle = ()=>{
		if(isMobile)
			toggleOpen();
	};


	return (
		<Menu style={{ transform: (display ? "translateX(0rem)" : "translateX(-9.6667rem)")}}>
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
