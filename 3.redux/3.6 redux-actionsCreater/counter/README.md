- 在components文件夹各个组件中使用actionsCreater

```

//ActionCreater进化 此段代码抽离到store的action中
    import * as Types from "../store/action-types";
    function add(count) {
        return  {type:Types.INCREMENT,count}
    }
    function minus(count) {
        return  {type:Types.DECREMENT,count}
    }


```
- 在store下reducer文件夹中index.js使用combineReducers进行 reducer的集中处理

```
 let myCombine  = (reducers)=>{ //combineReducers实现原理
     return (state={},action)=>{
         let obj = {};
         for(let key in reducers){
             obj[key] = reducers[key](state[key],action)
        }
         return obj;
     }
 };

```