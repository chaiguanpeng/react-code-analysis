import React from 'react'
import ReactDOM from "react-dom"
import store from "../store"
class Counter extends React.Component{
    state = {number:store.getState().number,num:0};
    componentWillMount(){
        // 订阅状态变化事件.当状态变化时修改当前组件状态，然后会重新渲染组件
        this.unsubcribe = store.subscribe(()=>{
            this.setState({number:store.getState().number})
        })
        this.timer = setInterval(()=>{
            this.setState({num:this.state.num+1});
        },1000)
    }  
    componentWillUnmount(){
        this.unsubcribe();
        window.clearInterval(this.timer);
    }
    kill = ()=>{
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <p>{this.state.num}</p>
                <button onClick={()=>store.dispatch({type:"ADD"})}>+</button>
                <button onClick={()=>store.dispatch({type:"MINUS"})}>-</button>
                <button onClick={this.kill}>kill</button>
            </div>
        )
    }
}

export default Counter