import React from "react";
import store from "../store";
import * as Types from "../store/action-types"
//react想实现页面刷新 必须用setState
//讲生成action的对象的方法叫actionCreator
import actions from "../store/actions/counter";
export default class Counter extends React.Component {
    constructor(){
        super();
        this.state = {
            number:store.getState().number
        }
    };
    componentDidMount(){
      this.unsubscribe = store.subscribe(()=>{
        this.setState({
            number:store.getState().number
        })
      })
    };
    componentWillUnmount(){ //组件销毁，取消订阅
        this.unsubscribe()
    };
    render() {
        return (
            <div>
                <button onClick={()=>{
                    store.dispatch(actions.add(5))
                }}>+</button>
                <div>{this.state.number}</div>
                <button onClick={()=>{
                    store.dispatch(actions.minus(1))
                }}>-</button>
            </div>
            )
    }
};