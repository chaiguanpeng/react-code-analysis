import React,{Component,PureComponent} from 'react';

// import PureComponent from "./PureComponent"
import ReactDOM from 'react-dom';
import _ from "lodash";
/* PureComponent 纯组件的优化的原理是重写了shouldComponentUpdate，如果说老的状态和新的状态不是一个对象的话才刷新
*  这样会有问题，解决方案2
* 1、每次一定都要生成新的对象 可以用lodash中的深拷贝 _.cloneDeep(),但是深拷贝非常消耗内存
* 2、imutable.js实现
*
* */


//输入0应该不需要render，状态或者属性没有改变则不渲染
class Counter extends  PureComponent{
    state = {
        counter:{number:0}
    };
    handleClick = (event)=>{
        // 1、用lodash中深拷贝返回新对象,但是会非常耗内存
        // let state = _.cloneDeep(this.state);
        let state = this.state;
        let amount = this.amount.value ? Number(this.amount.value):0;
        state.counter.number = state.counter.number + amount
        this.setState(state);
    };
    render(){
        console.log("render");
        return (
            <div>
                <p>{this.state.counter.number}</p>
                <input type="text" ref={input=>this.amount = input}/>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
