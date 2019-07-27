import styled from 'styled-components/macro'

export const Wrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.77778rem;
        background-color: #262626;
    @media (max-width: 62.5em) {
	    display: flex;
	    -webkit-box-align: center;
	    align-items: center;
	    -webkit-box-pack: justify;
	    justify-content: space-between;
	    height: 2.77778rem;
	}
`;

export const SecondaryMenu = styled.div`
    position: absolute;
    top: 2.77778rem;
    left: 0px;
    right: 0px;
    height: ${props => props.open ? "2.77778rem" : "0rem"};
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    user-select: none;
    overflow-x: scroll;
    overflow-y: hidden;
    color: rgb(134, 134, 134);
    padding: 0px 1.11111rem;
    transition: height 0.1s ease 0s;
    background: rgb(239, 239, 239);
`;

export const SecondaryMenuItem = styled.div`
    padding-right: 1.11111rem;
`;


export const Button = styled.button`
    cursor: pointer;
    height: 2.77778rem;
    text-align: center;
    vertical-align: middle;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: none;
    flex: 0 0 auto;
    padding: 0 0.555556rem;
    svg{
    	width:15px;
     	height:15px;
    }
`;

export const ArrowWrapper = styled.div`
    transition: transform 0.2s ease 0s;
`;
