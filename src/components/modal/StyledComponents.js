import styled from 'styled-components/macro'
import {ReactComponent as Expand} from "../../static/images/layout/expand.svg";


export const ModalHeader = styled.h4`
	font-size: 1.5625em;
	line-height: 1.2em;
	letter-spacing: 0.2px;
	font-weight: bold;
	text-align: center;
	margin: 0;
`;


export const ModalBody = styled.div`
	display: flex;
    padding: 10px 0 0 0;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    justify-content: space-evenly;
    flex-direction: column;
   align-items: center;
   
`;


export const StyledExpand = styled(Expand)`
	height: 16px;
	width: 16px;
	right:0;
	top:0;
	position: absolute;
	margin: 5px;
	transition: all .5s;
	transform: rotate(180deg);
	cursor:pointer;
	:hover{
		fill: #4f545c;
	}
`;
