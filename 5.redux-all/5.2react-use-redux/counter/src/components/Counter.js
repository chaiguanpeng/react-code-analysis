import React from "react";
import {createStore} from '../redux';
// action-types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
function reducer(state = {number: 0}, action) {
    switch (action.type) {
        case INCREMENT:
            return {number:state.number+action.count};
        case DECREMENT:
            return {number:state.number-action.count};
    }
    return state
}
let store = createStore(reducer);
//react想实现页面刷新 必须用setState
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
                    store.dispatch({type:INCREMENT,count:5})
                }}>+</button>
                <div>{this.state.number}</div>
                <button onClick={()=>{
                    store.dispatch({type:DECREMENT,count:3})
                }}>-</button>
            </div>
            )
    }
};