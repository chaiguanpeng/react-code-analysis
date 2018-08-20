function createStore(reducer) {
    let state; //此时默认还是underfined
    function dispatch(action) { //派发
        state = reducer(state,action); //reducer是根据老状态和派发的动作返回一个新的状态,覆盖掉老状态
        listeners.forEach(item=>item());
    }
    let listeners = []; //存放所有的监听函数
    let subscribe = (fn)=>{
        listeners.push(fn);
        return ()=>{ //取消绑定的函数,调用可以删除函数
            listeners = listeners.filter(item=>item!=fn)
        }
    };
    let getState = ()=>JSON.parse(JSON.stringify(state));
    dispatch({}); //目的是用用户的状态覆盖掉自身的状态
    return {
        getState,
        dispatch,
        subscribe
    }
}
export {createStore}