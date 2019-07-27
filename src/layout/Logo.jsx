import styled from 'styled-components/macro'
import React from "react";
import {Link} from "react-router-dom";
import logo from '../static/images/logo.png';
const LogoLink = styled(Link)`
    display: inline-block;
    margin-right: 1.94444rem;
`;


const LogoBg = styled.div`
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-size: contain;
    background-image: url(${logo});
    width: 5.55556rem;
    height: 1.66667rem;
    background-position: center center;
`;


export const Logo = () =>(
	<LogoLink to={"/"}>
		<LogoBg/>

	</LogoLink>
)


