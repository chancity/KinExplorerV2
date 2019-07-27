import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import {Home} from "../pages/Home";
import {MyKinWallet} from "../pages/MyKinWallet";
import {Transactions} from "../pages/Transactions";
import {Payments} from "../pages/Payments";
import {Operations} from "../pages/Operations";
import {Ledgers} from "../pages/Ledgers";
import {Effects} from "../pages/Effects";


const Routes = () => (
		<Switch>
			<Route exact path="/" component={ Home }/>
			<Route exact path="/my-kin-wallet" component={ MyKinWallet }/>
			<Route exact path="/operations" component={ Operations }/>
			<Route exact path="/payments" component={ Payments }/>
			<Route exact path="/transactions" component={ Transactions }/>
			<Route exact path="/ledgers" component={ Ledgers }/>
			<Route exact path="/effects" component={ Effects }/>
		</Switch>
);

export default Routes;
