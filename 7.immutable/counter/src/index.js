import React,{Component} from 'react';

import PureComponent1 from "./PureComponent2"
import ReactDOM from 'react-dom';
import {fromJS} from "immutable"

//输入0应该不需要render，状态或者属性没有改变则不渲染
class Counter extends  PureComponent1{
    state = {
        counter:fromJS({number:0})
    };
    handleClick = (event)=>{
        let amount = this.amount.value ? Number(this.amount.value):0;
        let state = {counter:this.state.counter.update("number",val=>val+amount)};
        this.setState(state);
    };
    render(){
        console.log("render");
        return (
            <div>
                <p>{this.state.counter.get("number")}</p>
                <input type="text" ref={input=>this.amount = input}/>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
