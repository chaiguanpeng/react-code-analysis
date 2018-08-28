- 保存老状态,实现打印日志功能 logger中间件 重写dispatch 比较Low写法
> 在src/store/index.js里面写

```angular2html
let oldDispatch = store.dispatch;
store.dispatch = function (action) {
    console.log(action.type, store.getState());
    oldDispatch(action);
    console.log(action.type, store.getState());
};

```

