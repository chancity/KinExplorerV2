import {
	SET_NAV_OPEN,
	SET_SECONDARY_NAV_OPEN,
	SET_SEARCH_OPEN,
	SET_IS_MOBILE
} from './types'

const initialState = {
	navOpen: false,
	secondaryNavOpen: false,
	searchOpen: false,
	isMobile: window.innerWidth <= 1000
};

export default (state = initialState, action)  => {
	switch (action.type) {
		case SET_NAV_OPEN:
			return {
				...state,
				navOpen: !state.navOpen,
				secondaryNavOpen: false,
				searchOpen: false
			};
		case SET_SECONDARY_NAV_OPEN:
			return {
				...state,
				secondaryNavOpen: !state.secondaryNavOpen,
				navOpen: false,
				searchOpen: false
			};
		case SET_SEARCH_OPEN:
			return {
				...state,
				searchOpen: !state.searchOpen,
				secondaryNavOpen: false,
				navOpen: false
			};
		case SET_IS_MOBILE:
			return {
				...state,
				searchOpen: false,
				navOpen: false,
				secondaryNavOpen: false,
				isMobile: action.isMobile
			};
		default:
			return state
	}
};
