import styled from 'styled-components/macro'

export const Overlay = styled.div`
    margin-right: 0.555556rem;
	display: block;
    @media (max-width: 62.5em) {
        position: fixed;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 1;
	    left: 0;
	    overflow-y: auto;
	    background: #36393f;
        display: ${props => props.searchOpen ? "block" : "none"};
	    margin: 0;
    }
`;

export const Modal = styled.div`
	display: block;
    @media (max-width: 62.5em) {
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    background: currentcolor;
	    overflow: auto;
	    box-shadow: 0 2px 0 rgba(0,0,0,.2), 0 3px 0 rgba(0,0,0,.05), 0 4px 0 rgba(0,0,0,.05);
        display: ${props => props.searchOpen ? "block !important" : "none !important"};
    }
`;

export const Header = styled.div`
    color: currentcolor;
    display: ${props => props.searchOpen ? "block" : "none"};
    @media (max-width: 62.5em){
    	button {
    	    cursor: pointer;
		    position: fixed;
		    right: 0.555556rem;
		    top: 0.611111rem;
		    z-index: 2;
		    color: currentColor;
		    padding: 0;
		    border-width: initial;
		    border-style: none;
		    border-color: initial;
		    border-image: initial;
	        background-color: transparent;
    	}
	}
`;


export const Wrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 0 0 auto;
    color: #72767d;
    background-color: #202225;
    border-radius: .5em;
    @media (max-width: 62.5em){
	    display: block;
	    padding: 0;
       border-radius: 0;
	}
`;


export const Label = styled.label`
    margin-right: 0.222222rem;
    margin-left: 0.222222rem;
    cursor: pointer;
    display: flex;
    background: none;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    flex: 0 0 auto;
    color: currentColor;
    :active{
	    transform: scale(0.95);
	    opacity: 0.6;
	}
	:focus, :hover  {
    	opacity: 0.8;
	}
	@media (max-width: 62.5em) {
	    position: absolute;
	    top: 0.5rem;
	    left: 0.555556rem;
	    height: 1.77778rem;
	    display: flex;
	    -webkit-box-align: center;
	    align-items: center;
	    -webkit-box-pack: center;
	    justify-content: center;
	    width: 1.77778rem;
	    z-index: 1;
	    background: none;
	}
`;

export const Input = styled.input`
    width: 14.22222rem;
    line-height: 1.66667rem;
    font-size: 0.833333rem;
    color: currentcolor;
    background: none;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    flex: 0 0 auto;
    @media (max-width: 62.5em) {
	    display: block;
	    width: 100%;
	    color: white;
	    background-color: transparent;
	    padding: 0.555556rem 2.66667rem;
	}
`;

export const PreShit = styled.pre`
    position: absolute;
    visibility: hidden;	
    white-space: pre;
    font-family: Arial,serif;
    font-size: 15px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    word-spacing: 0px;
    letter-spacing: normal;
    text-indent: 0px;
    text-rendering: auto;
    text-transform: none
`;
