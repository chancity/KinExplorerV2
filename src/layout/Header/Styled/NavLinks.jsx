import styled from 'styled-components/macro'
import {Link} from "react-router-dom";

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 1.66667rem;
    flex: 0 0 auto;
`;


export const NavLink = styled(Link)`
    display: inline-block;
    line-height: 2.77778rem;
    cursor: pointer;
    letter-spacing: 0.0222222rem;
    color: currentcolor;
    flex: 0 0 auto;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;    
    :active{
	    transform: scale(0.95);
	    opacity: 0.6;
	}
	
	:focus, :hover  {
    	opacity: 0.8;
	}
`;



export const SocialLink = styled.a`
    display: flex;
    margin-right: 1.11111rem;
    line-height: 2.77778rem;
        height: 1rem;
    cursor: pointer;
    letter-spacing: 0.0222222rem;
    color: currentcolor;
    flex: 0 0 auto;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;   
    
    
    :active{
	    transform: scale(0.95);
	    opacity: 0.6;
	}
	:focus, :hover  {
    	opacity: 0.8;
	}
`;
