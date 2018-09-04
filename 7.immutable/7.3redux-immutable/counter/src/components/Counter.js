import {fromJS} from "immutable";
import React,{Component} from 'react';
import {connect} from "react-redux"
class Counter extends  Component{
    render(){
        console.log("render");
        return (
            <div>
                <p>{this.props.number}</p>
                <input type="text" ref={input=>this.amount = input}/>
                <button onClick={()=>this.props.add(1)}>+</button>
            </div>
        )
    }
};
let actions = {
  add(payload){
      return {type:'ADD',payload}
  }
};
export default connect(
    state=>({number:state.counter.get("number")}),actions)(Counter)