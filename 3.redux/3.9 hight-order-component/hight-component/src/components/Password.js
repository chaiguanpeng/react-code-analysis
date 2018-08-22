import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import local from "./Local";
class Password extends Component {
    render() {
        return <div>
            <input type="text" value={this.props.password} onChange={()=>{}}/>
        </div>
    }
}
export default local("password")(Password)