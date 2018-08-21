import React from "react";

export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input type="checkbox"/>
                        今天吃药了嘛
                        <button className="btn btn-xs pull-right">&times</button>
                    </li>
                </ul>
            </div>
        )
    }
}