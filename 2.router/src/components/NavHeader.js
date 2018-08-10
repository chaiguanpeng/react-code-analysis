import React,{Component} from 'react'
import {withRouter} from '../react-router-dom';
class NavHeader extends Component{
	render() {
		return (
			<div className="navbar-header">
				<a onClick={()=>this.props.history.push('/')} className="navbar-brand">管理系统</a>
			</div>
		)
	}
}
//NavHeader本来是一个普通的组件，跟Route没有关系
export default withRouter(NavHeader);