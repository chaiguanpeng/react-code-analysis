import {createStore} from "redux";
// import {combineReducers} from "redux-immutable";
import {fromJS} from "immutable";
let initState =fromJS({number:0});
function counter(state = initState,action) {
    switch (action.type){
        case "ADD":
            return state.update("number",val=>val+action.payload);
        default:
            return state;
    }
}
function combineReducers(reducers) {
    return function (state =fromJS({}),action) {
        let newState = fromJS({});
        for(let key in reducers){
            newState = newState.set(key,reducers[key](state.get(key),action));
        }
        return newState;
    }
}
let reducer = combineReducers({
    counter
});
let store = createStore(reducer);
export default store
