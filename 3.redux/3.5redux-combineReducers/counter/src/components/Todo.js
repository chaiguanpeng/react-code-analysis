import React from "react";
import store from '../store'
export default class Todo extends React.Component{
    render(){
        return (
            <div>
                <input type="text" onInput={e=>{
                    console.log(store.getState().todo);
                    store.dispatch({type:'ADDTODO',content:e.target.value})
                }}/>
            </div>
        )
    }
}