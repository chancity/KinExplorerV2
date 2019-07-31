import styled from 'styled-components/macro'


export const Panel = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(32,34,37,0.3);;
	font-size: 14px;
	padding: 5px 10px;
	border-radius: .5em;
    box-shadow: 3px 3px 3px rgba(0,0,0,.2), 4.5px 4.5px 4.5px rgba(0,0,0,.05), 6px 6px 6px rgba(0,0,0,.05);
`;

export const PanelHeader = styled.div`
	padding: 1em .5em;
	font-weight: 600;
	font-size: 20px;
	color: #dcddde;
`;
