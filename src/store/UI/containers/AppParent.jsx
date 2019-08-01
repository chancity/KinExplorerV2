import { connect } from 'react-redux'
import {AppParent as AppParentC} from "../../../app/Styled";

const mapStateToProps = (state)=>({
	navOpen: state.UI.navOpen
});

const AppParent = connect(mapStateToProps,null)(AppParentC);
export default 	AppParent;

