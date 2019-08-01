import styled from 'styled-components/macro'
import {Link} from "react-router-dom";


export const PanelTable = styled.table`
    table-layout: fixed;
	text-align: left;
	border-spacing: 0;
	box-sizing: border-box;
	@media (max-width: 62.5em){
		font-size: 12px;
		td, th{
			padding-left: .5em;
		}
		>thead > tr > th {
		    padding-top:  .5em;
		    padding-bottom:  .5em;
	    }
	    > tbody > tr > td {
		    padding-top:  .5em;
		    padding-bottom:  .5em;
	    }
	}
	td, th{
		padding-left: 1em;
	}
	>thead > tr > th {
	    padding-top: 1em;
	    padding-bottom: 1em;
	   	border-bottom: #292b2f 2px solid;
    }
    > tbody > tr > td {
	    padding-top: 1em;
	    padding-bottom: 1em;
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


export const NavLink = styled(Link)`
	transition: .2s;
	color: ${props => props.color || "rgb(147,107,251)"};
	cursor:pointer;
	:hover{
		color: rgb(91, 60, 171) !important;
	}
`;