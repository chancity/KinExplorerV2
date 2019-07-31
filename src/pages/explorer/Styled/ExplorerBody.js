import styled from 'styled-components/macro'


export const BodyGrid = styled.div`
    display: grid;
    grid-gap: 10px;
   	grid-template-columns: repeat(3, 1fr);
	@media (max-width: 72.5em) {
 		grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));
 		.main, .child {
 			grid-column: auto !important;
 		}
	}
	
	.main {
  		grid-column: auto / span 2;
	}
	
	.child {
  		grid-column: auto / span 1;
	}
`;

export const SideWrapper = styled.div`
	display: grid;
	grid-gap: 10px;
`;


