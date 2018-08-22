import React from "react";
import {connect} from "./react-redux"
class Counter extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <button onClick={()=>{
                    this.props.add(1)
                }}>+</button>
                <div>{this.props.n}</div>

            </div>

        )
    }
}
let mapStateToProps = (state)=>{
    return {n:state.number}
};
let mapDispatchToProps = (dispatch)=>{
    return {
        add:(count)=>{
            dispatch({type:"ADD",count})
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter)