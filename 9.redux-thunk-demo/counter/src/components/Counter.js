import React from "react";
import actions from "../store/actions/counter";
import {connect} from "react-redux";
class Counter extends React.Component {
    render() {
        console.log('props',this.props);
        return (
            <div>
                <button onClick={()=>{
                    this.props.add()
                }}>+</button>
                <div>{this.props.number}</div>
                <button onClick={()=>{
                    this.props.minus(1)
                }}>-</button>
            </div>
            )
    }
}
let mapStateToProps = (state)=>{ //state代表的store.getState()
    return {...state.counter}
};

export default connect(mapStateToProps,actions)(Counter)

