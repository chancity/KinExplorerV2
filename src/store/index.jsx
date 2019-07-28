import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import UIReducer from "./UI/reducers";

const rootReducer = combineReducers({
	UI: UIReducer,
});

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);
export default createStore(rootReducer, middleWareEnhancer);
