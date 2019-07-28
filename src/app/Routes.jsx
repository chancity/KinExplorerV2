import * as React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import {MyKinWallet} from "../pages/MyKinWallet";
import {Transactions} from "../pages/Transactions";
import {Payments} from "../pages/Payments";
import {Operations} from "../pages/Operations";
import {Ledgers} from "../pages/Ledgers";
import {Effects} from "../pages/Effects";


const Routes = () => (
		<Switch>
			<Route exact path="/" render={() => (
				<Redirect to="/explorer"/>
			)}/>
			<Route exact path="/explorer/operations" component={ Operations }/>
			<Route exact path="/explorer/payments" component={ Payments }/>
			<Route exact path="/explorer/transactions" component={ Transactions }/>
			<Route exact path="/explorer/ledgers" component={ Ledgers }/>
			<Route exact path="/explorer/effects" component={ Effects }/>
			<Route exact path="/my-kin-wallet" component={ MyKinWallet }/>
		</Switch>
);

export default Routes;
