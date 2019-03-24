import React from "react";
import actions from "../store/actions/counter";
import {connect} from "react-redux";
import axios from "axios";
class Counter extends React.Component {
    state = {
        number :10
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5b7bdbf95b040679770764fb/example/mock').then((succ)=>{
           let number = succ.data.num;
           this.setState({
               number
           })
        })
    }
    render() {
        console.log('props',this.props);
        return (
            <div>
                <button onClick={()=>{
                    this.forceUpdate()
                }}>+</button>
                <div>{this.state.number}</div>
            </div>
            )
    }
}
let mapStateToProps = (state)=>{ //state代表的store.getState()
    return {...state.counter}
};

export default connect(mapStateToProps,actions)(Counter)

