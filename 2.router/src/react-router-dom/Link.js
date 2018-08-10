import React,{Component} from 'react';
import {Consumer} from "./context";
export default class Link extends Component{
    render(){
        return (
            <Consumer>
                {
                    value=>{
                        let {history:{push}} = value;
                        return <a onClick={()=>push(this.props.to)}>{this.props.children}</a>
                    }
                }
            </Consumer>
        )
    }
}