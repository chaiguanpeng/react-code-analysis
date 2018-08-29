import React from "react";
import store from "../store";
import * as Types from "../store/action-types"
//react想实现页面刷新 必须用setState
//讲生成action的对象的方法叫actionCreator
import actions from "../store/actions/counter";
import {connect} from "../react-redux";
import {bindActionCreators} from "../redux"
//每个页面里都需要每次引入store,  =>contextAPI
// 每次都需要将store中的状态映射到组件的状态中, =>(高阶组件中)
// 订阅更新
class Counter extends React.Component {
    render() {
        // console.log("counter的props",this.props);
        return (
            <div>
                <button onClick={()=>{
                   // this.props.counter.add(5)
                    this.props.add(5)
                }}>+</button>
                <div>{this.props.counter.number}</div>
                <button onClick={()=>{
                    this.props.minus(1)
                }}>-</button>
            </div>
            )
    }
}
let mapStateToProps = (state)=>{ //state代表的store.getState()
    return {...state}
};

// export default connect(mapStateToProps,actions)(Counter)   =>用这个最简洁



//第三种写法 redux提供的bindActionCreators。不用
export default connect(mapStateToProps,(dispatch)=>{return bindActionCreators(actions,dispatch)})(Counter)



//第二种写法 不用
// let bindActionCreators = (actions)=>{
//     return (dispatch)=>{
//         let obj={};
//         for(let key in actions){
//             obj[key] = (...args)=>dispatch(actions[key](...args));
//         }
//         return obj
//     }
// };
// export default connect(mapStateToProps,bindActionCreators(actions))(Counter)

//两个函数  第一种写法 基本不用
// let mapDispatchToProps = (dispatch)=>{ //dispatch代表 store.dispatch()
//     return {
//         add:(...args)=>dispatch(actions.add(...args)),
//         minus:(...args)=>dispatch(actions.minus(...args))
//     }
// };
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)