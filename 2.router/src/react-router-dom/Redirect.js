import React, {Component} from 'react';
import {Consumer} from "./context";
export default class Redirect extends Component{
    render(){
        return (
            <Consumer>
                {
                    value=>{
                        value.history.push(this.props.to);
                        return null; //不渲染任何东西
                    }
                }
            </Consumer>
        )
    }
}