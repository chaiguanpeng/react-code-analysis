- 修改了store/index-1.js。实现redux-thunk中间件
> 在src/store/index.js里面写

```
let reduxThunk = (store)=>(dispatch)=>(action)=>{
    if(typeof action === "object"){
        return dispatch(action);
    }
    //将dispatch的权限交给你去操作
    if(typeof action ==='function'){
        return action(dispatch,store.getState);
    }
};

```
- 修改了store/actions/counter.js.
> 返回的是一个函数不再是对象,可以进行异步操作

```angular2html
let actions = {
    add(num){
        /*redux-thunk允许你actionCreator返回的是一个函数,
        * 如果是函数，会让函数执行 并且把dispatch的权利转交给你，
        * 你可以在想要的时机派发事件
         */
        return (dispatch,getState)=>{
            setTimeout(function () {
                dispatch({type:Types.INCREMENT,count:num})
            },1000)
        }
    },
    minus(num){
        return {type:Types.DECREMENT,count:num}
    }
};

```