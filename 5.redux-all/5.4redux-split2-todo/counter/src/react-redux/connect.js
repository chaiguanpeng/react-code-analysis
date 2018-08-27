import {Consumer} from "./context";
//connect执行两次返回的是一个组件，下面是组件意思 不是函数
let connect = (mapStateToProps,mapDispatchToProps)=>(Comp)=>{
    return ()=><Consumer>
        {store=>{
            console.log(store);
        }}
    </Consumer>
};