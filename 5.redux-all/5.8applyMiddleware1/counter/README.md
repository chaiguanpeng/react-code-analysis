- compose组合，在store/index.js中使用
> 最简单组合例子

```angular2html
// 先求和->转大写->求长度
function len(str) {
    return str.length
}
function toUpperCase(str) {
    return str.toUpperCase();
}
function sum(a,b) {
    return a+b
}

let  compose=(...fns)=>{
   if(fns.length ===1){
       return fns[0];
   }
   return fns.reduce((a,b)=>(...args)=>{
      return a(b(...args))
   })
};
let r = compose(len,toUpperCase,sum)("a","b");
console.log(r);

```

- 有多个中间件时, applyMiddleware重写,applyMiddleware是redux中的

```angular2html
let applyMiddleware = (...middlewares)=>(createStore)=>(reducer)=>{
    let store = createStore(reducer); //创建store
    let middles = middlewares.map(middleware=>middleware(store));
    //dispatch代表的是新的dispatch
    let dispatch = compose(...middles)(store.dispatch); //执行第二层函数传递原有的dispatch
    //用新的dispatch覆盖掉老的dispatch,用户调用我们自己的dispatch，可以在自己想派发的地方调用原来的dispatch进行派发动作
    return {...store,dispatch};
};


export default applyMiddleware(logger1,logger2)(createStore)(reducer);

```