function createStore(){
    let state;
    let listeners = [];
    function getState(){
        return JSON.parse(JSON.stringify(state));
    }
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(listener=>listener());
    }
    //订阅 如果有人想要监听状态变化事件,可以把监听函数传过来，然后把这个监听函数放到数组中去
    function subscribe(listener){
        listeners.push(listener);
        return function (){
            listeners = listeners.filter(item=>item!=listener);
        }
    }
    dispatch({type:'@@init'});
    return {
        getState,
        dispatch,
        subscribe
    }
}
function reducer(state = initState,action){
    switch(action.type){
        case ADD:
            return {number:state.number+1};
        case MINUS:
            return {number:state.number-1};
        default:
            return state;
    }
}
let initState = {
    number: 0
};
const ADD = "ADD";
const MINUS = "MINUS";

// 调用的逻辑
let store = createStore(reducer);
let counter = document.querySelector("#counter");
function render(){
    counter.innerHTML = store.getState().number;
}
render();

store.subscribe(render);
document.querySelector("#addBtn").addEventListener("click",()=>{
    store.dispatch({type:ADD});
})
document.querySelector("#minusBtn").addEventListener("click", () => {
    store.dispatch({
        type: MINUS
    });
})