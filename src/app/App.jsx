import React from 'react';
import {AppParent, AppBody} from './Styled';
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppStore from "../store";
import {setIsMobileOpen} from "../store/UI/actions";
import NavMenu from "../store/UI/containers/NavMenu";
//import {Footer} from "../layout/Footer/Styled";
const store = AppStore;

function App() {
	const parentRef = React.useRef(null);

	React.useEffect(()=> {
		window.addEventListener("resize", ()=>{
			store.dispatch(setIsMobileOpen(window.innerWidth <= 1000))
		});
		console.log("App Mounted");
	}, []);


	return (
		<AppParent ref={parentRef}>
			<Provider store={store}>
				<BrowserRouter>
					<NavMenu/>
					<AppBody>
						<Routes/>
					</AppBody>
				</BrowserRouter>
			</Provider>
		</AppParent>
	);
}

export default App;


//<Footer>
//	<AppBody>
//
//	</AppBody>
//</Footer>
