let createStore = (reducer)=>{
    let state;
    let listeners = [];
    let dispatch = (action)=>{
      state = reducer(state,action);
      listeners.forEach(fn=>fn())
    };
    let subscribe = (listener)=>{
      listeners.push(listener);
      return ()=>{
          listeners =  listeners.filter(fn=>fn!==listener);
      }
    };
    let getState = ()=> JSON.parse(JSON.stringify(state));
    dispatch({type:"@INIT"})
    return {
        getState,
        dispatch,
        subscribe
    }
};
//想实现=>{counter:{number:1},todo:[]};
let combineReducers = (reducers)=>{
    return (state={},action)=>{
        let obj ={};
        for(let key in reducers){
            //让每一个reducer执行,讲执行后的结果作为新的状态
            obj[key] = reducers[key](state[key],action);
        }
        return obj
    }
};
//绑定动作的创建者  在Counter.js中看使用
let bindActionCreators = (actions,dispatch)=>{
        let obj={};
        for(let key in actions){
            obj[key] = (...args)=>dispatch(actions[key](...args));
        }
        return obj
};


export {
    createStore,
    combineReducers,
    bindActionCreators
}