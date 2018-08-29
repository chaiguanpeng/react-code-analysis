- applyMiddleware常用方法,在redux中修改。原理基于下面

```angular2html

export default createStore(reducer,applyMiddleware(logger1,logger2));


```

- applyMiddleware的最初实现版

> 基于组合compose

```angularjs

export default applyMiddleware(logger1,logger2)(createStore)(reducer);

```