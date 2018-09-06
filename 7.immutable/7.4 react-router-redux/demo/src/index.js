import React,{Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import {Router,Route} from 'react-router'
import {Link} from "react-router-dom"
// import {
//     ConnectedRouter,
//     routerReducer,
//     routerMiddleware,
//     push
// } from "react-router-redux";
const LOCATION_CHANGE = "LOCATION_CHANGE";
const CHANGE_LOCATION = "CHANGE_LOCATION";
class ConnectedRouter extends Component{
    static contextTypes = {
      store:PropTypes.object
    };
    // 链接仓库和路由，监听路由变化，当路径发生变化的时候派发动作
    componentWillMount(){
        this.store = this.context.store;
        //window.addEventListener('hashchange',()=>{})
        //window.addEventListener('pushState',()=>{})
        //history是一个封装，让hashhistory和browerhistory使用相同的api
        this.props.history.listen(location=>{
            this.store.dispatch({
                type:LOCATION_CHANGE,
                location
            })
        })
    }
    render(){
        return <Router {...this.props}/>
    }
}
let initRouterState = {location:{}};
function routerReducer(state = initRouterState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {...state,location:action.location};
        default:
            return state
    }
}

function routerMiddleware(history) {
    return function ({getState, dispatch}) {
        return function (next) {
            return function (action) {
                if(action.type ===CHANGE_LOCATION){
                    history.push(action.pathname);
                }else {
                    next(action)
                }
            }
        }
    }
}
function push(pathname) {
    return {
        type:CHANGE_LOCATION,
        pathname
    }
}





const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(middleware)
);
window.store = store;
window.push = push;

let Home = ()=><div>首页</div>
let About = ()=><div>关于</div>
let Topics = ()=><div>话题</div>
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Link to="/home">home</Link>
                <Link to="/about">about</Link>
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);