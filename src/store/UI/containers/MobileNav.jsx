import { connect } from 'react-redux'
import {MobileNav as MobileNavC} from "../../../layout/Header/MobileNav";
import {setNavOpen, setSearchOpen, setSecondaryNavOpen} from "../actions";

const mapStateToProps = (state)=>({
	isMobile: state.UI.isMobile,
	navOpen: state.UI.navOpen,
	secondaryNavOpen: state.UI.secondaryNavOpen,
});

const MobileNav = connect(mapStateToProps,{setNavOpen, setSecondaryNavOpen, setSearchOpen})(MobileNavC);
export default 	MobileNav;

