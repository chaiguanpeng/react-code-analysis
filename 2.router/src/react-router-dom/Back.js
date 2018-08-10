import React, {Component} from 'react';
import {Consumer} from "./context";
export default class Redirect extends Component{
    render(){
        return (
            <Consumer>
                {
                    value=>{
                        return <a onClick={()=>value.history.goback()}>返回上一级</a>;
                    }
                }
            </Consumer>
        )
    }
}