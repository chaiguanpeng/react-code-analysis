import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import actions from "../store/action/todo";
import {connect} from "react-redux"
class Todo extends Component {
    render() {
        console.log(this.props);
        {/*store.dispatch({type:"ADD_TODO",text:1})*/}
        return <div>
            <input type="text" onKeyUp={(e)=>{
                if(e.keyCode===13){
                    this.props.addTodo(e.target.value);
                    e.target.value=""
                }
            }}/>
            {this.props.todos.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </div>
    }
}
export default connect((state)=>({todos:state.todo}),actions)(Todo)

