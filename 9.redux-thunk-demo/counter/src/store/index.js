import {createStore,applyMiddleware} from 'redux';
import reducer from "./reducers";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reduxLogger from "redux-logger";
//使用中间件 reduxThunk、reduxPromise、reduxLogger
let store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise,reduxLogger));
export default store;



