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