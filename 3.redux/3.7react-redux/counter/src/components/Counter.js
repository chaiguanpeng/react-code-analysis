import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//利用react-redux需要导出一个连接后的组件
import {connect} from 'react-redux'
import * as actions from "../store/action/counter";
class Counter extends Component {
    render() {
        {/*store.dispatch({type:"INCREMENT",count:1})*/}
        return <div>
            <button onClick={()=>{
               this.props.add(1)
            }}>+</button>
            <p>{this.props.num}</p>
            <button onClick={()=>{
                this.props.minus(2)
            }}>-</button>
        </div>
    }
}
//简化版connect方法2 connect中mapDispatchToProps也可以传入actionCreater对象
export default connect((state)=>({...state.counter}),actions)(Counter);




/*todo:为什么可以放actions，因为在redux中不是react-redux。会用bindActionCreators函数包装
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
*
* */












//connect笨重版 connect方法1
//connect执行时有两个函数
// 1 mapStateToProps 将redux中的状态映射成属性
// 2 mapDispatchToProps 将dispatch方法映射成属性
// 3 这两个函数的返回值会作为当前组件的属性
/*let mapStateToProps = (state)=>{ //state指的是redux存放的状态
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
export default connect(mapStateToProps,mapDispatchToProps)(Counter); //第二次执行的参数是当前组件*/