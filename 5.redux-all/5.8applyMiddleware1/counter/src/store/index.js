import {createStore,compose,applyMiddleware} from '../redux';
import reducer from "./reducers"
// import reduxThunk from "redux-thunk";
let logger1 = (store)=>(dispatch)=>(action)=>{ //store原生的store  dispatch原生的dispatch action是用户发的动作
    console.log("inner1",store.getState());
    dispatch(action);
    console.log("outer1",store.getState());
};
let logger2 = (store)=>(dispatch)=>(action)=>{ //store原生的store  dispatch原生的dispatch action是用户发的动作
    console.log("inner2",store.getState());
    dispatch(action);
    console.log("outer2",store.getState());
};
let reduxThunk = (store)=>(dispatch)=>(action)=>{
    if(typeof action === "object"){
        return dispatch(action);
    }
    //将dispatch的权限交给你去操作
    if(typeof action ==='function'){
        return action(dispatch,store.getState);
    }
};



export default applyMiddleware(logger1,logger2)(createStore)(reducer);



