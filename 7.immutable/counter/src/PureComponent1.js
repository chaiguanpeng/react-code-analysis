import React,{Component} from 'react';
import _ from "lodash";
export default class PureComponent1 extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return !_.isEqual(nextState,this.state)
    }
 }