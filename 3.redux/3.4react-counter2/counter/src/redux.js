function createStore(reducer) {
    let state;
    let listeners = [];
    let dispatch = (action)=> {
        state = reducer(state,action);
        listeners.forEach(item=>item());
    };
    dispatch({});
    let subscribe = (fn)=>{
        listeners.push(fn);
        return ()=>{
         listeners = listeners.filter(item=>item!=fn)
        }
    };
    let getState = ()=>JSON.parse(JSON.stringify(state));
    return{
        getState,
        dispatch,
        subscribe
    }
}
export {createStore}
// module.exports = createStore; 给test.js测试用