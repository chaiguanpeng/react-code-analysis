import counter from "./counter";
import todo from "./todo";
import {combineReducers} from "../../redux"

//{counter:{number:1},todo:[]}; 合并的是状态,状态管理的特点就是一个store
export default combineReducers({counter,todo});