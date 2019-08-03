import styled from 'styled-components/macro';
import {NavLink} from "react-router-dom";

export const Menu = styled.nav`
    position: fixed;
    transform: translateZ(0px);
    display: block;
    z-index: 1;
    left: 0;
    top: 2.77778rem;
    bottom: 0;
    right: auto;
    width: 9.6667rem;
    box-sizing: border-box;
    color: inherit;
    overflow-y: auto;
    background: #202225;
    transition: transform 150ms ease-out 0s;
    box-shadow: 1px 0 0 rgba(0,0,0,.2), 1.5px 0 0 rgba(0,0,0,.05), 2px 0 0 rgba(0,0,0,.05);
    @media (max-width: 62.5em) {
	        display: block;
            transform: translateX(-9.6667rem);
	}
`;
export const MenuInner = styled.div`
    display: block;
    box-sizing: border-box;
    height: 100%;
    padding-top: 1.38889rem;
    
    @media (max-width: 62.5em) {
	        display: block;
	}
`;

export const Section = styled.div`
    margin-bottom: 1.11111rem;
`;

export const SectionTitle = styled.h4`
    display: block;
    font-weight: normal;
    margin: 0.555556rem 2.22222rem
`;

export const StyledLink = styled(NavLink)`
    display: inline-block;
    color: inherit;
    cursor: pointer;
    padding: 0.111111rem 0.444444rem;
    margin: -0.111111rem -0.444444rem;
    
    :hover {
    	background: rgba(185, 187, 190, 0.1);
	}
    @media (min-width: 62.5em)	{
    	border-radius: 0.166667rem;
    }

`;
