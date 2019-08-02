import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import UIReducer from "./UI/reducers";
import Blockchain from "./Blockchain/reducers";
import sdk from '@kinecosystem/kin-sdk'
const server = new sdk.Server('https://horizon-block-explorer.kininfrastructure.com/');


const rootReducer = combineReducers({
	UI: UIReducer,
	BC: Blockchain
});

const middlewares = [thunk.withExtraArgument({api: server})];
const middleWareEnhancer = applyMiddleware(...middlewares);
export default createStore(rootReducer, middleWareEnhancer);
