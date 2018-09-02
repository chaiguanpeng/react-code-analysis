import React,{Component} from "react"
import dva,{connect} from 'dva';
import { Router, Route, Switch,Link } from 'dva/router';
//模拟后台数据
let todos = [{id:1,text:"1",completed:false},{id:2,text:"2",completed:true}];
let api = {
  load(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(todos)
      },1000)
    })
  },
  toggle(id){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        todos = todos.map(todo=>{
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo;
        });
        resolve(todos);
      },1000)
    })
  },
  add(todo){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        todos = [...todos, todo];
        resolve(todos)
      },1000)
    })
  }
};
// 1. 初始化
const app = dva();

// 2. 定义Model  实现这种格式 {todos:{list:[],filter:'all'}}
app.model({
  namespace:"todos",
  state:{
    list:[],
    filter:"all" //过滤的类型
  },
  reducers:{
    loaded(state,action){
      let list = action.list;
      console.log("----",list);
      return {
          ...state,
          list
        }
    }
  },
  effects:{
      *load(action,{put,call}){
         let list = yield call(api.load);

        yield put({type:'loaded',list})
      },
    //切换ID对应的todo的完成状态
    *toggle({id},{put,call}){
      let list =  yield call(api.toggle,id);
      yield put({type:'loaded',list})
    },
    *add({todo},{put,call}){
      let list =  yield call(api.add,todo);
      yield put({type:'loaded',list});
    }
  },
  subscriptions:{ //订阅 在这里我们监听url切换到/todos的时候，调用后台接口异步加载数据
    setup({history,dispatch}){ //参数2个- history操作历史 dispatch派发动作
      //当浏览器路径发生变化的时候会执行此回调函数并传入location,location中有pathname
      history.listen(({pathname})=>{  //参数是history对象
        if(pathname == "/todos"){
          //如果要执行异步任务的话肯定要把动作派发给effets
          dispatch({type:"load"})
        }
      })

    }

  }
});

// 3. Router
const HomePage = () => <div>Hello Dva.</div>;
class Todos extends Component{

  render(){
    let {list,toggle,add} = this.props;
    console.log("list",list);
    return (
        <div>
          <input type="text" ref={input=>this.text = input} onChange={()=>{}}/>
          <button onClick={()=>add(this.text.value)}>增加</button>
          <ul>
            {
              list.map(todo=>(<li key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={()=>toggle(todo.id)} />
                {todo.text}
              </li>))
            }
          </ul>
        </div>
      )
}}
let actions = {
  toggle(id){
    return {type:'todos/toggle',id}
  },
  add(text){
    return {type:'todos/add',todo:{id:Date.now(),text,completed:false}}
  }
};
let WrappedTodos = connect(state=>state.todos,actions)(Todos);
//history是hashHistory和browserHistory的封装，是用来跳转路径的 history.push()
app.router(({ history }) =>
  <Router history={history}>
    <div>
      <Link to="/">首页</Link>
      <Link to="/todos">todos</Link>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/todos" exact component={WrappedTodos} />
      </Switch>
    </div>
  </Router>
);

// 4. Start
app.start('#root');
