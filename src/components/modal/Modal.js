import * as React from "react";
import { createPortal } from "react-dom";
import styled from 'styled-components/macro'
import {StyledExpand} from "./StyledComponents";


const InternalModalOverlay = styled.div`
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 2147483646;
    background-color: rgba(0,0,0,.6);
    
        
    @-webkit-keyframes ModalShow {
		0% {
			opacity: 0;
			-webkit-transform: scale(1.2);
			transform: scale(1.2)
		}
		
		to {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1)
			}
		}
		
		@keyframes ModalShow {
			0% {
			opacity: 0;
			-webkit-transform: scale(1.2);
			transform: scale(1.2)
		}
		
		
		to {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`;
const InternalModalWrapper = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	height: 0;
	z-index: 2147483647;
	justify-content: center;

    top: 0;;
	
`;
const InternalModal = styled.div`
    animation: ModalShow .1s ease-out;
    margin: 0;
    background-color: #2f3136;
    width: 440px;
    height: fit-content;
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    border-radius: .5em;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 30px;
    text-align: center;
    top: 145px;
    z-index: 2147483647;
    @media (max-width: 440px){
    	width: 100%;
       	top: 0;
    }
`;

export default React.memo(props => {
	const {children, useToggle} = props;
	return (useToggle.isToggled ?
		createPortal(
			<>
				<InternalModalOverlay onClick={useToggle.toggle}/>
				<InternalModalWrapper>
					<InternalModal>
						<StyledExpand onClick={useToggle.toggle}/>
						{children}
					</InternalModal>
				</InternalModalWrapper>

				</>, document.body) : null);
});
