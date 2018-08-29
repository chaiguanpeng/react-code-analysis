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
//组合多个中间件方法
let  compose=(...fns)=>{
    if(fns.length ===1){
        return fns[0];
    }
    return fns.reduce((a,b)=>(...args)=>{
        return a(b(...args))
    })
};
//多个中间件组合
let applyMiddleware = (...middlewares)=>(createStore)=>(reducer)=>{
    let store = createStore(reducer); //创建store
    let middles = middlewares.map(middleware=>middleware(store));
    //dispatch代表的是新的dispatch
    let dispatch = compose(...middles)(store.dispatch); //执行第二层函数传递原有的dispatch
    //用新的dispatch覆盖掉老的dispatch,用户调用我们自己的dispatch，可以在自己想派发的地方调用原来的dispatch进行派发动作
    return {...store,dispatch};
};
export {
    createStore,
    combineReducers,
    bindActionCreators,
    compose,
    applyMiddleware
}