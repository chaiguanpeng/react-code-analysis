import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions"
class Counter extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>{this.props.add()}}>+</button>
            </div>
        )
    }
}
export default connect(
    state=>state,
    actions
)(Counter)