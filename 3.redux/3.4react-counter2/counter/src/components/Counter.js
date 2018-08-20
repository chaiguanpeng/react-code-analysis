import React from "react";
import store from "../store";
//组件更新 属性更新 状态更新,将redux中的数据转化成自己的状态
export default class Counter extends React.Component{
    state = {
        n:store.getState().number
    };
    componentDidMount(){
        this.un = store.subscribe(()=>{
            this.setState({
                n:store.getState().number
            })
        })
    };
    componentWillUnmount(){
        this.un();
    }
    add = ()=>{
        store.dispatch({type:'ADD',count:1})
    };
    minus = ()=>{
        store.dispatch({type:'MINUS',count:1})
    };
    render(){
        return (
            <div>
                <button onClick={this.add}>+</button>
                <p>{store.getState().number}</p>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}