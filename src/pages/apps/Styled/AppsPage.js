import styled from 'styled-components/macro'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as Expand } from '../../../static/images/layout/expand.svg';

export const AppCategoryContainer = styled.div`
	overflow: auto;

`;

export const AppCategorySliderContainer = styled.div`
	display: grid;
	overflow: auto;
	grid-template-columns: repeat(auto-fit, 235px);
	grid-gap: 15px;

	padding: 0 20px  20px 0;
	margin: 0;
	justify-content: left;
    justify-items: left;
	@media (max-width: 62.5em) {
		overflow: hidden;
		overflow-y: scroll;
		height: 100%;
  		-webkit-overflow-scrolling: touch;
		grid-auto-flow: column dense;
		width: max-content;

	
	}
`;

export const AppsContainer = styled.div`
	display: grid;
	grid-gap: 15px;
`;

export const AppImageContainer = styled.div`
    width: 125px;
    height: 125px;
    overflow: hidden;
    border-radius: 36px;
    align-self: center;
`;

export const AppImage = styled(LazyLoadImage)`
    transition: transform 0.25s ease-in 0s;
    width: 125px;
    height: 125px;
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
	width: 100%;
	height: 100%;
    justify-content: center;
    margin: 1em 0;
	
	svg{
		width: 50px;
    	height: auto;
    	justify-self: center;
	}
`;

export const StyledExpand = styled(Expand)`
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
