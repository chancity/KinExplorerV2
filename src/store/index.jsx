import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import UIReducer from "./UI/reducers";
import Blockchain from "./Blockchain/reducers";
import sdk from '@kinecosystem/kin-sdk'
import throttleActions from "redux-throttle-actions";
import {ADD_RECORD} from "./Blockchain/types";
const server = new sdk.Server('https://horizon-block-explorer.kininfrastructure.com/');


const rootReducer = combineReducers({
	UI: UIReducer,
	BC: Blockchain
});

const middlewares = [thunk.withExtraArgument({api: server}), throttleActions([ADD_RECORD], 25)];
const middleWareEnhancer = applyMiddleware(...middlewares);
export default createStore(rootReducer, middleWareEnhancer);
