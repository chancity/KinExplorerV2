import React from 'react';
import {AppParent} from './Styled';
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppStore from "../store";
import {setIsMobile} from "../store/UI/actions";
import NavMenu from "../store/UI/containers/NavMenu";
import AppBody from "../store/UI/containers/AppBody";
import {IntlProvider} from "react-intl";
const store = AppStore;

function App() {
	const parentRef = React.useRef(null);

	React.useEffect(()=> {
		window.addEventListener("resize", ()=>{
			store.dispatch(setIsMobile(window.innerWidth <= 1000))
		});
	}, []);


	return (
		<IntlProvider>
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
		</IntlProvider>
	);
}

export default App;



//import {Footer} from "../layout/Footer/Styled";
//<Footer>
//	<AppBody>
//
//	</AppBody>
//</Footer>
