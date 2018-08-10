// 声明一个初始状态
let initState = {
    title:{
        text:'标题',
        color:'red'
    },
    content:{
        text:'内容',
        color:"green"
    }
};
// 规定里面只能修改title.text content.color
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";

// 调用此方法创建一个仓库
function createStore() {
    let state;  //声明一个state
    let listeners = [];
    function getState() { //得到状态的方法
        //深拷贝
        return JSON.parse(JSON.stringify(state));
    }
    function dispatch(action) { //派发指令的方法
        state = reducer(state,action); //调用dispatch方法时候，初始化了state状态
        listeners.forEach(listener=>listener());
    }
    //订阅 如果有人想要监听状态变化事件,可以把监听函数传过来，然后把这个监听函数放到数组中去
    function subscribe(listener) {
        listeners.push(listener);
        console.log(listeners);
        
        //每个订阅的函数都会返回一个取消订阅的函数
        return function () {
            listeners = listeners.filter(item=> item!=listener);
        }
    }
    //要先在创建仓库的时候调用一下dispatch方法，type的值随意，目的就是为了给state赋初始值
    dispatch({type:'@@INIT'});
    return {
        getState,
        dispatch,
        subscribe
    }
}
// 处理器函数
function reducer(state = initState,action) { 
    // 判断动作的类型
    switch (action.type) {
        case UPDATE_TITLE_TEXT: // //{type:UPDATE_TITLE_TEXT,text:'新标题'}
            return { ...state, title: { ...state.title, text: action.text } }; //用新派发的替换
        case UPDATE_CONTENT_TEXT:
            return { ...state, content: { ...state.content, text: action.text }};
        default:
            return state;
    }
}
//创建仓库
let store = createStore(reducer);

function renderTitle(){ //渲染title方法
    let state = store.getState();
    let titleEle = document.querySelector("#title");
    titleEle.innerHTML = state.title.text;
    titleEle.style.color = state.title.color;
}
function renderContent() { //渲染content方法
  let state = store.getState();
  let titleEle = document.querySelector("#content");
  titleEle.innerHTML = state.content.text;
  titleEle.style.color = state.content.color;
}
renderTitle();
renderContent();
//取消订阅函数
let unRenderTitle = store.subscribe(renderTitle);
let unRenderContent = store.subscribe(renderContent);
// 1s派发指令
setInterval(function(){
    store.dispatch({type:UPDATE_TITLE_TEXT,text:'新标题'+Date.now()});
    store.dispatch({type:UPDATE_CONTENT_TEXT,text:'新内容'+Date.now()});
},1000);
//5s后取消订阅
setTimeout(function(){
    unRenderContent();
},5000)
