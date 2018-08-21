import React from "react";

export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav nav-pills">
                        <li className="active"><a href="">全部</a></li>
                        <li><a href="">未完成</a></li>
                        <li><a href="">已完成</a></li>
                </nav>
            </div>
        )
    }
}