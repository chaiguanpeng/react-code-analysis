//redux 统一状态管理,不能直接更改状态
const CHANGE_TITLE_TEXT = "change_title_text"; //宏即常量
function createStore(reducer) { //将状态放到一个盒子里 别人改不了
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
    titleState:  {color:"red",text:"标题"},
    contentState:{color:"green",text:"内容"}
};
function reducer(state=initState,action) { //管理员,负责如何更改状态的
    switch (action.type) { //更改状态 要有一个新的状态覆盖掉
        case CHANGE_TITLE_TEXT:
            return {...state,titleState:{...state.titleState,text:action.text}}
    }
    return state;
}
let store = createStore(reducer);
function renderTitle() {
    let title = document.querySelector('.title');
    title.innerHTML = store.getState().titleState.text;
    title.style.color =store.getState().titleState.color;
}
function renderApp() {
    renderTitle();
}
renderApp();
setTimeout(()=>{
    store.dispatch({type:CHANGE_TITLE_TEXT,text:'长标题'}); //除了type的叫它payload载荷
    renderApp(); //每次派发玩都需要重新渲染
},1000);