import {createStore} from '../redux';
import reducer from "./reducers"
// let store = createStore(reducer);
// window.store = store;
let logger = (store)=>(dispatch)=>(action)=>{ //store原生的store  dispatch原生的dispatch action是用户发的动作
    console.log(store.getState());
    dispatch(action);
    console.log(store.getState());
};
let applyMiddleware = (middleware)=>(createStore)=>(reducer)=>{
    let store = createStore(reducer); //创建store
    let middle = middleware(store);
    //dispatch代表的是新的dispatch
    let dispatch = middle(store.dispatch); //执行第二层函数传递原有的dispatch
    //用新的dispatch覆盖掉老的dispatch,用户调用我们自己的dispatch，可以在自己想派发的地方调用原来的dispatch进行派发动作
    return {...store,dispatch};
};



export default applyMiddleware(logger)(createStore)(reducer);




//保存老状态,实现打印日志功能 logger中间件 重写dispatch 比较Low写法
// let oldDispatch = store.dispatch;
// store.dispatch = function (action) {
//     console.log(action.type, store.getState());
//     oldDispatch(action);
//     console.log(action.type, store.getState());
// };