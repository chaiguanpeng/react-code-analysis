import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from "../store";
/*ActionCreater进化 此段代码抽离到store的action中
    import * as Types from "../store/action-types";
    function add(count) {
        return  {type:Types.INCREMENT,count}
    }
    function minus(count) {
        return  {type:Types.DECREMENT,count}
    }
*/



import * as actions from "../store/action/counter"
export default class Counter extends Component {
    state = {
      n: store.getState().counter.num
    };
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                n:store.getState().counter.num
            })
        })
    }
    render() {
        {/*store.dispatch({type:"INCREMENT",count:1})*/}
        return <div>
            <button onClick={()=>{store.dispatch(actions.add(10))}}>+</button>
            {this.state.n}
            <button onClick={()=>{store.dispatch(actions.minus(7))}}>-</button>
        </div>
    }
}