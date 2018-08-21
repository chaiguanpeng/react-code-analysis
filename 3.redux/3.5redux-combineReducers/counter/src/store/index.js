import {createStore} from "../redux";
//两个reducer,需要合并
function counter(state = {number:0},action) {
    switch (action.type) {
        case "ADD":
            return {...state,number:state.number+action.count};
        case "MINUS":
            return {...state,number:state.number-action.count}
    }
    return state;
}
function todo(state = [], action) {
    switch (action.type){
        case 'ADDTODO':
            return [...state,action.content]
    }
    return state
}

//返回一个新的reducer
let  combineReducers =(reducers)=>{ //reducers 为 {counter:fn,todo:fn}
    return (state={},action)=>{ //state = {counter:{number:0},todo:[]}
        let obj = {}; //最终的状态
        for(let key in reducers){
            // console.log(state[key][key]);
            obj[key] = reducers[key](state[key],action); //obj.counter = {number:0}
        }
        return obj
    }
};
let reducer = combineReducers({ // combineReducers  {counter:{number:0},todo:[]}
   counter,
    todo
});
export default createStore(reducer);