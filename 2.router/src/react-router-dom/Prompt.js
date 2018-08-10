import React, { Component } from 'react'
import {Consumer} from "./context"
export default class Prompt extends Component {
    componentWillUnmount(){
        this.history.unblock();
    }
  render() {
    return (
      <Consumer>
          {
              value=>{
                  this.history = value.history
                  let {when,message} = this.props;
                  if(when){
                      value.history.block(message);
                  }else{
                      value.history.unblock()
                  }
              }
          }
      </Consumer>
    )
  }
}

