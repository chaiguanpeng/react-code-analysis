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
}
let actions = {
  add(payload){
      return {type:'ADD',payload}
  }
};
//state是合并后的state，应该也是一个immutable对象。把state已经转化成immutable对象了
export default connect(
    state=>({number:state.getIn(['counter','number'])}),actions)(Counter)