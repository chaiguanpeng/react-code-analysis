import React from "react";
import actions from "../store/action"
import {connect} from "react-redux";
class TodoFooter extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <nav className="nav nav-pills" onClick={(e)=>{
                    let result = e.target.dataset.type; //点击的某一个
                    this.props.changeType(result);
                }}>
                        <li className={this.props.type ==="all"?'active':""}><a data-type="all">全部</a></li>
                        <li className={this.props.type ==="unfinish"?'active':""}><a data-type="unfinish">未完成</a></li>
                        <li className={this.props.type ==="finish"?'active':""}><a data-type="finish">已完成</a></li>
                </nav>
            </div>
        )
    }
}
export default connect(state=>({...state}),actions)(TodoFooter)