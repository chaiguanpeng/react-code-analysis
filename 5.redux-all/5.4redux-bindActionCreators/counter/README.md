### 组件中连接redux三种写法
- 第三种写法 会使用 过程演变是因为第二种

```angular2html
export default connect(mapStateToProps,actions)(Counter)

```


- 第二种写法 不用
 ```angular2html
let bindActionCreators = (actions)=>{
     return (dispatch)=>{
         let obj={};
         for(let key in actions){
             obj[key] = (...args)=>dispatch(actions[key](...args));
         }
         return obj
     }
 };
 export default connect(mapStateToProps,bindActionCreators(actions))(Counter)

```
 

- 两个函数  第一种写法 基本不用

```
 let mapDispatchToProps = (dispatch)=>{ dispatch代表 store.dispatch()
    return {
         add:(...args)=>dispatch(actions.add(...args)),
        minus:(...args)=>dispatch(actions.minus(...args))
    }
};
 export default connect(mapStateToProps,mapDispatchToProps)(Counter)
```