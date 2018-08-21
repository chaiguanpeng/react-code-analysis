- react-redux中两个方法 Provider和connect
- Provider在src/index中使用
- connect在组件中使用,以Counter组件为例
### connect方法1

```
//connect执行时有两个函数
// 1 mapStateToProps 将redux中的状态映射成属性
// 2 mapDispatchToProps 将dispatch方法映射成属性
// 3 这两个函数的返回值会作为当前组件的属性
let mapStateToProps = (state)=>{ //state指的是redux存放的状态
    return {n1:state.counter.num} //或者 return {...state.counter.num}
};
let mapDispatchToProps = (dispatch)=>{
    return {
        add(count){
            dispatch(actions.add(count))
        },
        minus(count){
            dispatch(actions.minus(count))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter); //第二次执行的参数是当前组件

```

### connect方法2(简化版)

```
export default connect((state)=>({...state.counter}),actions)(Counter);
```
### bindActionCreators原理(解释了为什么可以直接放actions)

```
let bindActionCreators = (actions)=>{
    return (dispatch)=>{
        let obj = {};
        for(let key in actions){
            obj[key] = (...args)=>{
                dispatch(actions[key](...args))
            }
        }
        return obj;
    }
};
export default connect((state)=>({...state.counter}),bindActionCreators(actions))(Counter);

```