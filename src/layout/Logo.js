import styled, { keyframes } from 'styled-components/macro'
import React from "react";
import {Link} from "react-router-dom";
//import KinIcon from '../static/images/kin/kin-icon.svg';
import KinLogoFull from '../static/images/kin/kin-logo-purple.svg';


const spin = keyframes`
  0% {
   	transform: scale(1);
  }
  100% {
    transform: scale(1.1);;
  }
`;

const LogoLink = styled(Link)`
    display: inline-block;
    margin-right: 1.94444rem;
    @media (max-width: 55.5rem) {
    	    margin-right: 0;
    }
        :hover{
    	animation:  .5s ${spin}  infinite alternate;
    }
`;


const LogoBg = styled.div`
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-size: contain;
    background-image: url(${KinLogoFull});
    
    width: 1.75rem;
    height: 1.75rem;
    background-position: center center;
    margin-right: 15px;
`;


export const Logo = () =>(
	<LogoLink to={"/explorer"}>
		<LogoBg/>
		<span style={{color: "#936BFB", verticalAlign: "middle"}}>Explorer</span>
	</LogoLink>
)


