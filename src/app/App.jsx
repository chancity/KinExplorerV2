import React from 'react';
import {AppParent} from './Styled';
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppStore from "../store";
import {setIsMobile} from "../store/UI/actions";
import NavMenu from "../store/UI/containers/NavMenu";
import AppBody from "../store/UI/containers/AppBody";
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import vi from 'react-intl/locale-data/vi'
import ru from 'react-intl/locale-data/ru'
import zh from 'react-intl/locale-data/zh'
import enMessages from '../languages/en'
import ruMessages from '../languages/ru'
import viMessages from '../languages/vi'
import zhMessages from '../languages/zh'

addLocaleData([...en, ...ru, ...vi, ...zh]);

const store = AppStore;

const getMessages = locale => {
	switch (locale) {
		case 'vi':
			return viMessages;
		case 'ru':
			return ruMessages;
		case 'zh':
			return zhMessages;
		default:
			return enMessages
	}
}

function App() {
	const parentRef = React.useRef(null);
	const [isMobile, setMobile] = React.useState(window.innerWidth <= 1000);

	React.useEffect(() => {
		store.dispatch(setIsMobile(isMobile));
		console.log(isMobile);
	}, [isMobile]);

	React.useEffect(() => {
		window.addEventListener("resize", () => {
			setMobile(window.innerWidth <= 1000);
		});
	}, [setMobile]);

	return (
		<IntlProvider
			key={"en"}
			locale={"en"}
			messages={getMessages("en")}
		>
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
