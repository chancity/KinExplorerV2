import styled from 'styled-components/macro'


export const AppCategoryContainer = styled.div`
	overflow: auto;

`;

export const AppCategorySliderContainer = styled.div`
	display: grid;
	overflow: auto;
	grid-template-columns: repeat(auto-fit,minmax(200px, auto));
	grid-gap: 15px;
	justify-content: left;
	padding: 0 20px  20px 0;
	margin: 0;
	@media (max-width: 62.5em) {
		overflow: hidden;
		grid-template-columns: unset;
		grid-auto-flow: column dense;
		width: max-content;

	
	}
`;

export const AppsContainer = styled.div`
	display: grid;
	grid-gap: 15px;
`;

export const AppImageContainer = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    z-index: 0;
    overflow: hidden;
    margin: 18px;
    border-image: initial;
    border-radius: 36px;   
`;

export const AppImage = styled.img`
    transform: scale(1);
	background-size: cover;
	background-position: center center;
    transition: transform 0.25s ease-in 0s;
    width: 100%;
    height: 100%;
 
`;

export const AppContainer = styled.div`
	display: grid;
	grid-auto-flow: row dense;
    border-color: rgba(151, 151, 151, 0.4);
    border-image: initial;
    border-radius: 36px;
    justify-content: center;
    text-align: center;
    height: min-content;
    ${AppImage}:hover {
        display: block;
	    z-index: 100;
	    transform: scale(1.1);
    }
`;
export const AppTitle = styled.h3`
	color: #b9bbbe;

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
		transform: scale(1.1);
		color: #79848a;
	}	
`;
export const UrlContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 10px;
	width: 100%;
	height: 100px;
	
	svg{
		width: 50px;
    	height: 50px;
    	justify-self: center;
	}
`;
