import {createStore,combineReducers} from "redux";
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
let reducer = combineReducers({
    counter
});
let store = createStore(reducer);
export default store
