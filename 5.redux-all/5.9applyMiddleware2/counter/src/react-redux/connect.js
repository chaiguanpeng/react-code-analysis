import React from "react";
import {Consumer} from "./context";
import {bindActionCreators} from "../redux";
//connect执行两次返回的是一个组件，下面是组件意思 不是函数
let connect = (mapStateToProps,mapDispatchToProps)=>(Comp)=>{
    // connect执行两次后 返回的是一个新的组件，渲染后的结果就是老组件
    //需要一个代理组件，目的就是在react中调用setState(),让视图刷新
    class Proxy extends React.Component{
        state = mapStateToProps(this.props.store.getState());
        componentDidMount(){
            this.props.store.subscribe(()=>{
                this.setState(mapStateToProps(this.props.store.getState()));
            })
        }
        render(){
            let stateProps = this.state;
            let dispatchProps;
            //如果是对象 调用 bindActionCreators进行包装
            if(typeof mapDispatchToProps === "object"){
                dispatchProps = bindActionCreators(mapDispatchToProps,this.props.store.dispatch);
            }
            dispatchProps = mapDispatchToProps(this.props.store.dispatch);
            return <Comp {...stateProps} {...dispatchProps} ></Comp>
        }
    }
    return ()=><Consumer>
        {store=>{
           return <Proxy store = {store}/>
        }}
    </Consumer>
};
export default connect