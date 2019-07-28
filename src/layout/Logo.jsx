import styled from 'styled-components/macro'
import React from "react";
import {Link} from "react-router-dom";
import KinIcon from '../static/images/kin/kin-icon.svg';
import KinLogoFull from '../static/images/kin/kin-logo.svg';

const LogoLink = styled(Link)`
    display: inline-block;
    margin-right: 1.94444rem;
    @media (max-width: 55.5rem) {
    	    margin-right: 0;
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
	<LogoLink to={"/"}>
		<LogoBg/>
		<span style={{opacity:"0.65",color: "rgb(147, 107, 251)", verticalAlign: "middle"}}>Explorer</span>
	</LogoLink>
)


