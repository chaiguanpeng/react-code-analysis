//模拟connect方法实现
import React from "react"
let local = (key)=> (Component)=>{
    return class HighOrderComponent extends React.Component{
        state = {
            [key]:""
        };
        componentDidMount(){
          let val = localStorage.getItem(key);
          this.setState({[key]:val});
        }
        render(){
            return <Component {...this.state}/>
        }
    }
};

export default local