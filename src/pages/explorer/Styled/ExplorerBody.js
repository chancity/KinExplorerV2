import styled from 'styled-components/macro'


export const BodyGrid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	@media (max-width: 62.5em) {

	}
	a {
		transition: .2s;
		color: rgb(147,107,251);
		cursor:pointer;
		:hover{
			color: rgb(91, 60, 171);
		}
	}
`;

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2 1 auto;
	@media (max-width: 62.5em) {
	}
`;
export const SideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
`;
export const Panel = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(32,34,37,0.3);;
	font-size: 14px;
	padding: 5px 10px;
	border-radius: .5em;
	margin: 0 10px 10px 0;
    box-shadow: 3px 3px 3px rgba(0,0,0,.2), 4.5px 4.5px 4.5px rgba(0,0,0,.05), 6px 6px 6px rgba(0,0,0,.05);
	@media (max-width: 62.5em) {
		margin: 0 0 10px 0;
	}

`;

export const PanelHeader = styled.div`
	padding: 1em .5em;
	font-weight: 600;
	font-size: 20px;
	color: #dcddde;
`;

export const PanelTable = styled.table`
	text-align: left;
	border-spacing: 0;
    width: 100%;
    max-width: 100%;
	box-sizing: border-box;
	
	td, th{
		padding-left: 15px;
	}
	>thead > tr > th {
	    padding-top: 10px;
	    padding-bottom: 10px;
	   	border-bottom: #292b2f 2px solid;
    }
    >tbody > tr > td {
	    padding-top: 10px;
	    padding-bottom: 10px;
        border-top: #292b2f 1px solid;
    }
	>tbody>tr:first-of-type>td {
	    border-top: unset;
    }
    tr{
        margin: 0!important;
    	min-height: 60px;   
    }
    >tbody>tr{  
    	:hover {
    		background-color: rgba(20,20,20,0.1);
    	}	
    }
`;
