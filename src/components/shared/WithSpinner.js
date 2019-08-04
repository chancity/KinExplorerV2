import React from 'react'
import KinLogoFull  from '../../static/images/kin/kin-logo-purple.svg';
import styled, { keyframes } from 'styled-components/macro'

const spin = keyframes`
  0% {
   	transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(360deg) scale(1.5);;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  height: 100%;
  width:  100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;



const SpinnerBg = styled.div`
	overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-size: 50%;
    background-image: url(${KinLogoFull});
    background-position: center center;
    height: 300px;
    width: 300px;
	animation:  .5s ${spin}  infinite alternate;
`;

const Spinner = () => (
	<SpinnerContainer>
		<SpinnerBg/>
	</SpinnerContainer>
);

const WithSpinner = ({children, loaded}) => (
	<>
		{!loaded
		?
			<Spinner/>
		:
			<>
			{children}
			</>
		}

	</>
);

export default WithSpinner;

