import styled from 'styled-components/macro';

export const Menu = styled.nav`
    position: fixed;
    transform: translateZ(0px);
    display: block;
    z-index: 1;
    left: 0;
    top: 2.77778rem;
    bottom: 0;
    right: auto;
    width: 16.6667rem;
    box-sizing: border-box;
    color: inherit;
    overflow-y: auto;
    background: rgb(239, 239, 239);
    transition: transform 150ms ease-out 0s;
    
    @media (max-width: 62.5em) {
	        display: block;
	}
`;
export const MenuInner = styled.div`
    display: block;
    box-sizing: border-box;
    height: 100%;
    padding-top: 1.38889rem;
    
    @media (max-width: 62.5em) {
	        display: block;
	}
`;
