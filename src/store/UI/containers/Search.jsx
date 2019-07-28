import { connect } from 'react-redux'
import {Search as SearchC} from "../../../layout/Header/Search";
import {setSearchOpen} from "../actions";

const mapStateToProps = (state)=>({
	searchOpen: state.UI.searchOpen,
	isMobile: state.UI.isMobile,
});

const Search = connect(mapStateToProps,{setSearchOpen})(SearchC);
export default 	Search;

