import {createStore} from 'redux';
import reducer from "./reducer";
let store = createStore(reducer);
window._store = store; //为了在控制台打印store中内容
export default store;