import styled from 'styled-components/macro'


export const AppParent = styled.div`
	padding-left: 9.6667rem;
    overflow: hidden;
	@media (max-width: 62.5em) {
	    padding-left: 0;
	}
`;


const AppBody = styled.div`
    width: 76.8889rem;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 3rem 1.11111rem 1.66667rem;
    transition: transform 150ms ease-out 0s;
    
    @media (max-width: 62.5em) {
	    transform: translateX(${props => props.navOpen ? "9.6667rem" : "0rem" });
	
	}
`;

export {
	AppBody
}


