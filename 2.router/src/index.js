import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch,Redirect} from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Protected from './components/Protected';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css'
import MenuLink from './components/MenuLink';
import NavHeader from './components/NavHeader';
//A <Router> may have only one child element
ReactDOM.render(
	<Router>
		<div>
			<nav>
				<div className="navbar navbar-inverse">
					<div className="container-fluid">
						<NavHeader/>
						<div>
							<ul className="nav navbar-nav">
								<MenuLink to="/" label="首页" exact={true}/>
								<MenuLink to="/user" label="用户管理" exact={true}/>
								<MenuLink to="/profile" label="个人设置" exact={true}/>
							</ul>
					    </div>
					</div>
				</div>
			</nav>
			<Switch>
			  <Route exact path="/" component={Home} />
			  <Route path="/user" component={User} />
			  <Route path="/login" component={Login} />
			  <Protected path="/profile" component={Profile} />
			  <Redirect to="/"/>	
			</Switch>
		</div>
	</Router>
	,document.getElementById('root'));

