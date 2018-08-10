import React, {Component} from 'react';
class Login extends Component {
    constructor(props) {
        super(props)
    }
    handleClick = ()=>{
        localStorage.setItem("logined",true);
        this.props.history.push(this.props.location.state.from);
    };
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleClick}>登录</button>
            </div>
        )
    }
}
export default Login
