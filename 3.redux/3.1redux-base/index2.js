/*增加订阅函数，便于每次派发动作后，自动运行render,或者还有些自定义函数
    之前分两步:store.dispatch({type:CHANGE_TITLE,content:'珠峰'});render();
*/
function createStore(reducer) {
    let state; //此时默认还是underfined
    function dispatch(action) { //派发
        state = reducer(state,action);
        listeners.forEach(item=>item());
    }
    let listeners = []; //存放所有的监听函数
    let subscribe = (fn)=>{
        listeners.push(fn);
        return ()=>{ //取消绑定的函数,调用可以删除函数
            listeners = listeners.filter(item=>item!=fn)
        }
    };
    dispatch({}) //目的是用用户的状态覆盖掉自身的状态
    let getState = ()=>JSON.parse(JSON.stringify(state));
    return {
        getState,
        dispatch,
        subscribe
    }
}
const CHANGE_TITLE = "change_title";
let initState = {
    title:'标题'
};
function reducer(state=initState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return {...state,title:action.content}
    }
    return state
}
let store = createStore(reducer);

function render() {
    let title = document.querySelector('.title');
    title.innerHTML = store.getState().title
}
render();

//先订阅函数,然后就可以在派发动作时自动调用订阅的函数,
store.subscribe(render);
let unSubscribe=store.subscribe(function () {
   alert(1)
});
setTimeout(()=>{
    store.dispatch({type:CHANGE_TITLE,content:'珠峰'});
    unSubscribe()
},1000);
setTimeout(()=>{
    store.dispatch({type:CHANGE_TITLE,content:'珠1峰'});
},1000);