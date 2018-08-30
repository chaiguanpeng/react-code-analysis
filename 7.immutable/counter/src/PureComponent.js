import React,{Component} from 'react';
import _ from "lodash";
export default class PureComponent extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return !_.isEqual(nextState,this.state)
    }
 }