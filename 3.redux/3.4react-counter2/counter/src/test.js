let createStore = require('./redux');
function reducer (state={number:0},action) {
    switch (action.type) {
        case 'ADD':
            return {...state,number:state.number+action.a}
    }
    return state;
}
let store = createStore(reducer);
let unSubscribe = store.subscribe(function () {
    console.log(store.getState());
});
store.dispatch({type:'ADD',a:1});
unSubscribe();
store.dispatch({type:'ADD',a:1});
store.dispatch({type:'ADD',a:1});