import styled from 'styled-components/macro'

export const Overlay = styled.div`
    margin-right: 0.555556rem;
    @media (max-width: 62.5em) {
        position: fixed;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 1;
	    left: 0;
	 	display: ${props => props.searchOpen ? "block !important" : "none !important"};
	    overflow-y: auto;
	    background: rgb(239, 239, 239);
	    margin: 0;
    }
`;

export const Modal = styled.div`
    display: ${props => props.searchOpen ? "block !important" : "none !important"};
    @media (max-width: 62.5em) {
	    position: absolute;
	    top: 0px;
	    left: 0px;
	    right: 0px;
	    background: currentcolor;
	    overflow: auto;
    }
`;

export const Header = styled.div`
    display: ${props => props.searchOpen ? "block !important" : "none !important"};
    color: currentcolor;
    @media (max-width: 62.5em){
   
    	button {
    	    cursor: pointer;
		    position: fixed;
		    right: 0.555556rem;
		    top: 0.611111rem;
		    z-index: 2;
		    padding: 0px;
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
        background-color: #262626;
    @media (max-width: 62.5em){
	    display: block;
	    padding: 0;
	}
`;


export const Label = styled.label`
    margin-right: 0.222222rem;
    cursor: pointer;
    display: flex;
    background: none;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    flex: 0 0 auto;
    
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
	    color: white;
	    background: none;
	}
`;

export const Input = styled.input`
    width: 7.22222rem;
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
