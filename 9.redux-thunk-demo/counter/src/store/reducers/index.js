import counter from "./counter";
import {combineReducers} from "redux";

//{counter:{number:0}}; 合并的是状态,状态管理的特点就是一个store
export default combineReducers({counter});
