import { Wrapper, NavLink, SocialLink } from "./Styled/NavLinks";
import React from 'react';
import {Seperator} from "./Styled/Navbar";
import { ReactComponent as GithubSvg } from '../../static/images/social/github.svg';




export const SocialLinks = () => {
	return (
			<SocialLink to={"https://github.com/chancity"}>
				<GithubSvg/>
			</SocialLink>

	);
};
