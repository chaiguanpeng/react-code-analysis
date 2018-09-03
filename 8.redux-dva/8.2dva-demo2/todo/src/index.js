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
  },
  del(id){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        todos = todos.filter(todo=>todo.id!=id)
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
    loaded(state,{list}){
      return {
          ...state,
          list
        }
    },
    changeFilter(state,{filter}){
      return {
        ...state,
        filter
      }
    }
  },
  effects:{ //effects不能改变状态，只能通过派发动作给reducers
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
    },
    *del({id},{put,call}){
      let list =  yield call(api.del,id);
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
    let {list,toggle,add,changeFilter,filter,del} = this.props;
    // console.log("list",list);
    return (
        <div>
          <input type="text" ref={input=>this.text = input} onChange={()=>{}}/>
          <button onClick={()=>{add(this.text.value);this.text.value = ""}}>增加</button>
          <ul>
            {
              list.map(todo=>(<li key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={()=>toggle(todo.id)} />
                <span style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</span>
                <button onClick={()=>del(todo.id)}>删除</button>
              </li>))
            }
          </ul>
          <div>
            <button style={{color:filter=="uncompleted"&&'red'}} onClick={()=>changeFilter('uncompleted')}>未完成</button>
            <button style={{color:filter=="completed"&&'red'}} onClick={()=>changeFilter('completed')}>已完成</button>
            <button style={{color:filter=="all"&&'red'}} onClick={()=>changeFilter("all")}>全部</button>
          </div>
        </div>
      )
}}
let actions = {
  toggle(id){
    return {type:'todos/toggle',id}
  },
  add(text){
    return {type:'todos/add',todo:{id:Date.now(),text,completed:false}}
  },
  changeFilter(filter){ //同步的
    return {type:'todos/changeFilter',filter};
  },
  del(id){
    return {type:'todos/del',id}
  }
};
let WrappedTodos = connect(state=>({
  filter:state.todos.filter,
  list:state.todos.list.filter(item=>{
    switch (state.todos.filter){
      case "completed":
        return item.completed;
      case "uncompleted":
        return !item.completed;
      default:
        return true;
    }
  })
}),actions)(Todos);
//history是hashHistory和browserHistory的封装，是用来跳转路径的 history.push() history.listen()监听路径变化
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
