import styled from 'styled-components/macro'


export const BodyGrid = styled.div`
    display: grid;
    grid-gap: 15px;
   	grid-template-columns: repeat(3, 1fr);
	@media (max-width: 72.5em) {
 		display: flex;
 		flex-direction: column;
	    .child {
	    	margin-top: 15px;
	    }
	}
	
	.main {
  		grid-column: auto / span 2;
	}
	
	.main {
  		grid-column: auto / span 2;
	}
`;

export const SideWrapper = styled.div`
	display: grid;
	grid-gap: 15px;
`;


