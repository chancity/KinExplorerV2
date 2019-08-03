import styled from 'styled-components/macro'


export const AppParent = styled.div`
 	padding-left: ${props => !props.isMobile || props.navOpen ? "9.6667rem" : "0rem" };
    overflow: hidden;
 	 transition: padding-left 150ms ease-out 0s;
`;


const AppBody = styled.div`
    width: 100rem;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 3rem 1.11111rem 1.66667rem;
    overflow: auto;
    transition: transform 150ms ease-out 0s;
    @media (max-width: 62.5em){
    	  padding: 3rem 0.555555rem  1.66667rem;
    }
`;

export {
	AppBody
}


