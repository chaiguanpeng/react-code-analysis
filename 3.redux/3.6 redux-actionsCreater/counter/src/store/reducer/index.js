import {combineReducers} from "redux";
import counter from './counter';
import todo from "./todo";
// let myCombine  = (reducers)=>{ //combineReducers实现原理
//     return (state={},action)=>{
//         let obj = {};
//         for(let key in reducers){
//             obj[key] = reducers[key](state[key],action)
//         }
//         return obj;
//     }
// };

let reducers = combineReducers({
    counter,
    todo
});

export default reducers