import {Menu, MenuInner, Section, SectionTitle, StyledLink} from "./Styled/Sidebar";
import React from 'react';
import {withRouter} from "react-router-dom";
import navOptions from "./NavOptions";


const getRootPath = (location) => {
	return location.split("/")[1];
};
const Sidebar = ({ navOpen, isMobile, setNavOpen,  location }) => {
	const [navItems, setNavItems] = React.useState([]);
	const [path, setPath] = React.useState(null);
	const display = navOpen && isMobile;


	React.useEffect(() =>{
		const path = getRootPath(location.pathname);

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
			setNavOpen();
	};

	return (
		<Menu style={display ? { transform:"translateX(0rem)" } : undefined}>
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
