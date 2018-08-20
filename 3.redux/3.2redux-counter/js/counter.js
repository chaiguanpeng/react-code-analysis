/*
* 使用redux流程
* 1.定义当前项目有什么功能(常量)
* 2.定义当前项目的默认状态,状态放到reducer中
* 3.创建容器
* 4.可以在外面进行派发动作
* */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
let initState = {
    number:0
};
function reducer(state=initState,action) {
    switch (action.type) { //匹配动作进行更改
        case INCREMENT:
            return {...state,number:state.number+action.amount};
        case DECREMENT:
            return {...state,number:state.number-action.amount}
    }
    return state
}
//创建容器
let store = createStore(reducer);
//订阅状态，当状态变化时触发render函数
store.subscribe(render);
function render() {
    text.innerHTML = store.getState().number
}
render(); //默认先渲染次
add.addEventListener('click',()=>{
   store.dispatch({type:INCREMENT,amount:3})
});
minus.addEventListener('click',()=>{
    store.dispatch({type:DECREMENT,amount:2})
});