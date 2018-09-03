let createStore=(reducer)=> { //将状态放到一个盒子里 别人改不了
    let state ;
    function dispatch(action) {//派发 参数是action动作,action是一个对象,{type:'自定义}
       state= reducer(state,action); //调用写好的方法,这个方法会返回一个新的状态
    }
    dispatch({}); //
    let getState = ()=> JSON.parse(JSON.stringify(state)); //获取状态的方法 深拷贝
    return {
        getState,
        dispatch
    };
}
let initState = {
   number:0
};
let reducer=(state=initState,action)=> { //管理员,负责如何更改状态的
    switch (action.type) { //更改状态 要有一个新的状态覆盖掉
        case "add":
            return {number:state.number+action.count}
    }
    return state;
};
let store = createStore(reducer);
function render() {
    let content = document.querySelector('.content');
    content.innerHTML = store.getState().number;
}
render();
btn.onclick = function () {
    store.dispatch({type:"add",count:5});
    render()
}