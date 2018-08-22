import {createStore} from "redux";
const ADD = "ADD";
const MINUS = "MINUS";
let initState = {
    number:0
};
function reducer(state=initState,action) {
    switch (action.type) {
        case ADD:
            return {number:state.number + action.count}
        case MINUS:
            return {number:state.number - action.count}
    }
    return state
}
let store = createStore(reducer);
window._store = store;
export default store