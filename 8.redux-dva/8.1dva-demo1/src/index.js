import React from 'react';
import ReactDOM from 'react-dom';
//connect来自与 react-redux
import dva, { connect } from "dva";
let app = dva();
/*
* 1、状态是合并后的状态数{counter:{number:0}}
* 之前的combineReducers({counter})
* */
app.model({ //配置模板
    namespace: "counter", //命名空间,它就是以前的combineReducers里面的key
    state: {
        current: 0, //最大值
        highest:0   //当前值
    },
    //这里可以定义子reducer，它可以而且只能由它来修改状态
    reducers: { //这个名字是有意义的，如果派发一个counter/add，就会执行此reducer
        add(state,action){
            // console.log("1",action);
            let newCurrent = state.current+1;
            return {
                ...state,
                current:newCurrent,
                highest:newCurrent>state.highest?newCurrent:state.highest
            }
        },
        minus(state,action){
            return {
                ...state,
                current:state.current-1
            }
        },
    },
    //这个对象里放的是副作用，放的是
    effects:{
        * add( action,{put,call}){
            // console.log(action);
            //call表示调用一个异步任务
            yield call(delay,1000);
            //在model里派发动作的话是不需要加counter或者说namespace前缀的
            yield put({type:'minus'})
        },
        *madd(){
            console.log(1);
        }
    }
});
function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}
//记录一个当前值和最大值，
function Counter({highest,current,add}) { //参数就是props，传递给组件props的。函数组件没有this,纯函数
    return (
        <div style={{border:'1px solid red'}}>
             <p>最大值{highest}</p>
             <p>当前值{current}</p>
            <button onClick={()=>add()}>+</button>
        </div>
    )

}
let mapStateToProps = state => {  //state=>{counter:{number:0}}
    // console.log("state",state);
    return state.counter
};
let actions = {
    add(){
        return {type:"counter/add"}
    }
}
let ConnectedCounter = connect(
    mapStateToProps,actions
)(Counter)
//定义路由
app.router(({ history, app }) => (
    <div>
        <ConnectedCounter />
    </div>
));
app.start("#root")
