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
export {
    createStore
}