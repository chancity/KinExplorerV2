import styled from 'styled-components/macro'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as Expand } from '../../../static/images/layout/expand.svg';
import {Panel} from "../../../layout/Panel";


export const StyledPanel = styled(Panel)`
	background-color: transparent;
 	box-shadow: unset;
  	padding: 0;
   	width: 100%;
    position: relative;
    transition: all .2s;

   @media (max-width: 62.5em) {
	    height: 578px;
   }
`;

export const Scrollable = styled.div`
  @media (max-width: 62.5em) {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
`;
export const AppCategoryContainer = styled.div`
    @media (max-width: 62.5em) {
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
`;

export const AppCategorySliderContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 15px;
	padding: 5px 20px 20px 0;
	margin: 0;
	justify-content: left;
    justify-items: left;
    @media(max-width: calc(1761px)){
    	grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media(max-width: calc(1451px)){
    	grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media(max-width: calc(1140px)){
    	grid-template-columns: 1fr 1fr;
    }

	@media (max-width: 62.5em) {
		grid-template-columns: unset;
		grid-auto-flow: column dense;	
		overflow: hidden;
	   	width: fit-content;
	}
`;

export const AppsContainer = styled.div`
	display: grid;
	grid-gap: 15px;
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const AppImageContainer = styled.div`
    min-width: 158px;
    min-height: 158px;
    width: 158px;
    height: 158px;
    overflow: hidden;
    border-radius: 36px;
    align-self: center;
`;

export const AppImage = styled(LazyLoadImage)`
    transition: transform 0.25s ease-in 0s;
    width: 158px;
    height: 158px;
    min-width: 158px;
    min-height: 158px;
 	transform: scale(1.02);
    vertical-align: middle;
    border: none;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    border-radius: 36px;
    align-self: center;
    :hover {
    	display: block;
	    transform: scale(1.1);
        z-index: 100;
    }
`;

export const AppTitle = styled.h3`
	color: #b9bbbe;
	align-self: center;
	margin-top: 0;

`;

export const Description = styled.p`
	text-align: center;
	height: 90px;
	width: 296.89px;
	padding: 0 5px;
`;

export const Readmore = styled.a`
	color: #936BFB;
	text-align: center;
	:hover{
		color: rgb(91,60,171) !important;
		cursor: pointer;
		text-decoration: underline;
	}
`;

export const Url = styled.a`
	display:grid;
	text-align: center;
	color:#a6b1b7;
	font-size:16px;
	margin: auto;
	grid-gap: 5px;
   transition: transform 0.25s ease-in 0s;
	:hover{
	
		color: #79848a;
	}	
`;
export const UrlContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 45px;

    justify-content: center;
    margin: 1em 0;
	
	svg{
		width: 50px;
    	height: auto;
    	justify-self: center;
	}
`;

export const StyledExpand = styled(Expand)`
	min-height: 16px;
	min-width: 16px;
	height: 16px;
	width: 16px;
    margin: 5px;
	transition: all .5s;
	cursor:pointer;
	align-self: flex-end;
	:hover{
		fill: #4f545c;
	}
`;
