//Provider是一个组件,接受一个store的属性,内部将其过载在了context上
import React from "react";
import PropTypes from "prop-types"
class Provider extends React.Component{
    static childContextTypes = {
        store:PropTypes.object
    };
    getChildContext(){
        return {store:this.props.store}
    };
    render(){
        return this.props.children
    }
}
let connect = (mapStateToProps,mapDispatchToProps)=>(Component)=>{
    return class Proxy extends React.Component{
        static contextTypes = {
            store: PropTypes.object
        };
        state = mapStateToProps(this.context.store.getState()) //默认情况下调用mapStateToProps返回结果{n:0}
        componentDidMount(){
            this.context.store.subscribe(()=>{
                this.setState(mapStateToProps(this.context.store.getState()))
            })
        }
        render(){
            return <Component
                {...this.state}
                {...mapDispatchToProps(this.context.store.dispatch)}



                // // 第一版本没有setState()不会更新试图，因此改进如上面所述
                // {/*{...mapStateToProps(this.context.store.getState())}*/}
                // {/*{...mapDispatchToProps(this.context.store.dispatch)}*/}
            />
        }
    }
}
export {Provider,connect}