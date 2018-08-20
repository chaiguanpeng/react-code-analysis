import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "./redux";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
let initState = {
    number:0
};
let store = createStore(reducer);
function reducer(state=initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state,number:state.number+action.amount};
        case DECREMENT:
            return {...state,number:state.number-action.amount}
    }
    return state
}
class Counter extends React.Component{
    state = {
        ...store.getState()
    };
    componentDidMount(){ //订阅事件
        this.unsubscribe = store.subscribe(()=>this.setState({...store.getState()}))
    };
    componentWillUnmount(){
        this.unsubscribe()//移除事件监听
    };
    add = ()=>{
      store.dispatch({type:INCREMENT,amount:3});
    };
    minus = ()=>{
        store.dispatch({type:DECREMENT,amount:2});
    };
    render(){
        return (
            <div>
                <button onClick={this.add}>+</button>
                <p>{this.state.number}</p>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
