import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from "../store"
import actions from "../store/action/todo"
export default class Todo extends Component {
    state = {
      todos:store.getState().todo
    };
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                todos:store.getState().todo
            })
        })
    }
    render() {
        {/*store.dispatch({type:"ADD_TODO",text:1})*/}
        return <div>
            <input type="text" onKeyUp={(e)=>{
                if(e.keyCode===13){
                    store.dispatch(actions.addTodo(e.target.value))
                }
            }}/>
            {this.state.todos.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </div>
    }
}