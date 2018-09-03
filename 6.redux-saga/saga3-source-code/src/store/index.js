 import {createStore,applyMiddleware}  from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "../redux-saga";
import {rootSaga} from "../saga"
//执行它可以得到中间件函数
let sagaMiddleware = createSagaMiddleware();

let store = createStore(reducer,applyMiddleware(sagaMiddleware));
//开始执行rootSaga
 sagaMiddleware.run(rootSaga);
 export default store;