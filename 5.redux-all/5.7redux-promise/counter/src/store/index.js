import {createStore} from '../redux';
import reducer from "./reducers"
// import reduxThunk from "redux-thunk";
// import reduxPromise from "redux-promise";
let reduxPromise = (store)=>(dispatch)=>(action)=>{
    if(typeof action.then === "function"){
        console.log(11);
        console.log(action.then);
        return action.then(dispatch); //成功
    }
    if(typeof action.payload.then ==='function'){
        action.payload.then(data=>{
            // 把结果作为新的action发送出去
            return dispatch({...action,payload:data})
        }).catch(err=>{
            return dispatch({...action,payload:err})
        });
        return; //否则会继续向下执行
    }
    return dispatch(action);
};
let applyMiddleware = (middleware)=>(createStore)=>(reducer)=>{
    let store = createStore(reducer); //创建store
    let middle = middleware(store);
    //dispatch代表的是新的dispatch
    let dispatch = middle(store.dispatch); //执行第二层函数传递原有的dispatch
    //用新的dispatch覆盖掉老的dispatch,用户调用我们自己的dispatch，可以在自己想派发的地方调用原来的dispatch进行派发动作
    return {...store,dispatch};
};



export default applyMiddleware(reduxPromise)(createStore)(reducer);



