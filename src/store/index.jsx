import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import UIReducer from "./UI/reducers";
import Blockchain from "./Blockchain/reducers";
import sdk from '@kinecosystem/kin-sdk'
const server = new sdk.Server('https://horizon-ecosystem.kininfrastructure.com');


const rootReducer = combineReducers({
	UI: UIReducer,
	BC: Blockchain
});

//const middlewares = [thunkMiddleware.withExtraArgument(server)];
const middleWareEnhancer = applyMiddleware(thunk.withExtraArgument({api: server}));
export default createStore(rootReducer, middleWareEnhancer);
