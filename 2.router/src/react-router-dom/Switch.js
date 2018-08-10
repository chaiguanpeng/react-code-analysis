import React,{Component} from "react";
import {Consumer} from "./context";
import pathToRgexp from "path-to-regexp";
export default class Switch extends Component{
    render(){
        return  (
            <Consumer>
                {
                    value=>{
                        let {location:{pathname}} = value;
                        let children = this.props.children;
                        // console.log(children);
                        for(let i=0;i<children.length;i++){
                            let child = children[i];
                            // console.log(child);
                            //path的默认值为/,exact默认值为false 非精确匹配
                            let {path="/",exact=false} = child.props;
                            let reg = pathToRgexp(path,[],{end:exact});
                            if(reg.test(pathname)){
                                return child;
                            }
                        }
                        return null;
                    }
                }
            </Consumer>
        )
    }
}