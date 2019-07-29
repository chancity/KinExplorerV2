import { connect } from 'react-redux'
import {AppBody as AppBodyC} from "../../../app/Styled";
import {setNavOpen, setSearchOpen, setSecondaryNavOpen} from "../actions";

const mapStateToProps = (state)=>({
	navOpen: state.UI.navOpen,
});

const AppBody = connect(mapStateToProps,null)(AppBodyC);
export default 	AppBody;

