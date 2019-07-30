import * as React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import {MyKinWallet} from "../pages/mykinwallet/MyKinWallet";
import {Transactions} from "../pages/explorer/Transactions";
import {Payments} from "../pages/explorer/Payments";
import {Operations} from "../pages/explorer/Operations";
import {Ledgers} from "../pages/explorer/Ledgers";
import {Effects} from "../pages/explorer/Effects";
import {Overview} from "../pages/explorer/Overview";


const Routes = () => (
		<Switch>
			<Route exact path="/" render={() => (
				<Redirect to="/explorer"/>
			)}/>
			<Route exact path="/explorer" component={ Overview }/>
			<Route exact path="/explorer/operations" component={ Operations }/>
			<Route exact path="/explorer/payments" component={ Payments }/>
			<Route exact path="/explorer/transactions" component={ Transactions }/>
			<Route exact path="/explorer/ledgers" component={ Ledgers }/>
			<Route exact path="/explorer/effects" component={ Effects }/>
			<Route exact path="/my-kin-wallet" component={ MyKinWallet }/>
		</Switch>
);

export default Routes;
