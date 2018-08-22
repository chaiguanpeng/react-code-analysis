import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import local from "./Local";
class Username extends Component {
    render() {
        return <div>
            <input type="text" value={this.props.username} onChange={()=>{}}/>
        </div>
    }
}
/*告诉local 将username取出来，以属性的方式传递给Username
* mixin混合 我们可以把公共逻辑提取到他父组件上
 */
export default local("username")(Username)