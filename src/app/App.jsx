import React from 'react';
import {AppParent, AppBody} from './Styled';
import Routes from "./Routes";
import {NavMenu} from "../layout/Header/NavMenu";
import {BrowserRouter} from "react-router-dom";
//import {Footer} from "../layout/Footer/Styled";





function App() {
	const [open, setOpen] = React.useState(false);
	const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 1000);
	const toggleOpen = () => setOpen(!open);
	const toggleForceClose = () => setOpen(false);

	const parentRef = React.useRef(null);
	React.useEffect(()=> {
		window.addEventListener("resize", ()=>{
			setIsMobile(window.innerWidth <= 1000);
		});

	}, []);




	return (
		<AppParent ref={parentRef}>
			<BrowserRouter>
				<NavMenu open={open} toggleOpen={toggleOpen} toggleForceClose={toggleForceClose} isMobile={isMobile}/>
				<AppBody open={open}>
					<Routes/>
				</AppBody>
			</BrowserRouter>
		</AppParent>
	);
}

export default App;


//<Footer>
//	<AppBody>
//
//	</AppBody>
//</Footer>
