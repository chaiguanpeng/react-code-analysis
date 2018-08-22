import React from "react";
import Header from './Header';
import propTypes from "prop-types";
//希望App中定义一个color的状态,希望把状态给title来用
//  1.在父级上要定义上下文,先要标明上下文类型
//  2.在父级中获取儿子的上下文
export default class Counter extends React.Component {
    static childContextTypes = {
        col:propTypes.string
    };
    getChildContext(){ //这里返回的结果就是儿子的上下文
        return {
            col:this.state.color
        }
    }
    state = {
      color:'yellowgreen'
    };
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}
