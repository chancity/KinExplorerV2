import { SocialLink } from "./Styled/NavLinks";
import React from 'react';
import { ReactComponent as GithubSvg } from '../../static/images/social/github.svg';
import { ReactComponent as KinSvg } from '../../static/images/kin/kin-logo.svg';
import { ReactComponent as MediumSvg } from '../../static/images/social/medium.svg';
import { ReactComponent as RedditSvg } from '../../static/images/social/reddit.svg';
import { ReactComponent as CmcSvg } from '../../static/images/social/cmc.svg';

export const SocialLinks = () => {
	return (
		<>
			<SocialLink href={"https://github.com/chancity/KinExplorerV2"} target="_blank">
				<GithubSvg/>
			</SocialLink>
			<SocialLink href={"https://www.kin.org/"} target="_blank">
				<KinSvg/>
			</SocialLink>
			<SocialLink href={"https://medium.com/kinblog"} target="_blank">
				<MediumSvg/>
			</SocialLink>
			<SocialLink href={"https://www.reddit.com/r/KinFoundation/"} target="_blank">
				<RedditSvg/>
			</SocialLink>
			<SocialLink href={"https://coinmarketcap.com/currencies/kin/"} target="_blank">
				<CmcSvg/>
			</SocialLink>
		</>
	);
};

