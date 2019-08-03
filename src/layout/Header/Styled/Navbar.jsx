import styled from 'styled-components/macro'

export const NavHeader = styled.header`
    background: #2f3136;
    color: #b9bbbe;
    position: fixed;
    left: 0;
    box-sizing: border-box;
    z-index: 3;
    width: 100%;
    height: 2.77778rem;
    svg {
		height: 18px;
		width: 18px;
		fill: currentColor;	
		
	}
	button {
		color: currentColor;
	}
`;
export const Wrapper = styled.nav`
    position: fixed;
    left: 0;
    box-sizing: border-box;
    z-index: 3;
    width: 100%;
    height: 2.77778rem;
    font-family: "Avenir Next",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: 500;

    -webkit-transition: background 300ms ease-out 0s;
    transition: background 300ms ease-out 0s;
    padding: 0;
    font-size: 16px;
    box-shadow: 0 1px 0 rgba(0,0,0,.2), 0 1.5px 0 rgba(0,0,0,.05), 0 2px 0 rgba(0,0,0,.05);
    
    @media (max-width: 62.5em) {
    	font-size: 16px;
	}
    
`;

export const Normal = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 1.11111rem;    
`;

export const StartWrapper  = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
        
    @media (max-width: 62.5em) {
    	display: none;
	}
`;

export const EndWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
`;

export const Seperator = styled.span`
    width: 0.277778rem;
    height: 0.277778rem;
    opacity: 1;
    flex: 0 0 auto;
    margin: 0 0.833333rem;
    border-radius: 50%;
    background: currentColor;
`;

export const SocialWrapper = styled.nav`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    @media (max-width: 62.5em) {
    	display: none;
	}
`;





