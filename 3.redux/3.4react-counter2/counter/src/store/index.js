import {createStore} from "../redux";
let initState = {number:0};
function reducer(state = initState,action) {
    switch (action.type) {
        case "ADD":
            return {...state,number:state.number+action.count};
        case "MINUS":
            return {...state,number:state.number-action.count}
    }
    return state;
}
export default createStore(reducer);