import { connect } from 'react-redux'
import SidebarC  from "../../../layout/Header/Sidebar";
import {setNavOpen} from "../actions";

const mapStateToProps = (state)=>({
	isMobile: state.UI.isMobile,
	navOpen: state.UI.navOpen,
});

const Sidebar = connect(mapStateToProps,{setNavOpen})(SidebarC);
export default 	Sidebar;

