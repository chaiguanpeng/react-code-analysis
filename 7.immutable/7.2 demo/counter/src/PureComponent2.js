import React,{Component} from 'react';
import {is} from "immutable";
export default class PureComponent1 extends Component{
    shouldComponentUpdate(newProps,newState){
       let oldState = this.state || {};
       newState = newState?newState:{};
       if(Object.keys(oldState).length !== Object.keys(newState).length){
           return true;
       }
       for(let key in newState){
           if(!is(newState[key],oldState[key])){
               return true;
           }
       }
       return false
    }
 }