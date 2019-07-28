import {
	SET_NAV_OPEN,
	SET_SECONDARY_NAV_OPEN,
	SET_SEARCH_OPEN,
	SET_IS_MOBILE
} from './types'

const setNavOpen = () => ({
	type: SET_NAV_OPEN
});

const setSecondaryNavOpen = () => ({
	type: SET_SECONDARY_NAV_OPEN
});

const setSearchOpen = () => ({
	type: SET_SEARCH_OPEN
});


const setIsMobileOpen = (value) => ({
	type: SET_IS_MOBILE,
	isMobile: value
});


export {
	setNavOpen,
	setSearchOpen,
	setSecondaryNavOpen,
	setIsMobileOpen
}
