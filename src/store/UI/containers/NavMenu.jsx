import { connect } from 'react-redux'
import {NavMenu as NavMenuC} from "../../../layout/Header/NavMenu";

const mapStateToProps = (state)=>({
	isMobile: state.UI.isMobile,
});

const NavMenu = connect(mapStateToProps,null)(NavMenuC);
export default 	NavMenu;

