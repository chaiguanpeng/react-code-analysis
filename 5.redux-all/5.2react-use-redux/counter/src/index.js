// import React from 'react';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(<div>
//     hello
// </div>, document.getElementById('root'));
import {createStore} from './redux';
import $ from "jquery";
// action-types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
function reducer(state = {number: 0}, action) {
    switch (action.type) {
        case INCREMENT:
            return {number:state.number+action.count};
        case DECREMENT:
            return {number:state.number-action.count};
    }
    return state
}
let store = createStore(reducer);
$("#container").html(store.getState().number);
store.subscribe(()=>{
    $("#container").html(store.getState().number);
});
$("#add").click(()=>{
    store.dispatch({type:INCREMENT,count:5})
});
$("#minus").click(()=>{
    store.dispatch({type:DECREMENT,count:3})
});