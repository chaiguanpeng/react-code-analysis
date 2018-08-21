import React from "react";

export default class Counter extends React.Component {
    render() {
        return (
            <div>
                <h3>亲 您有x件事没完成</h3>
                <input type="text" className="form-control"/>
            </div>
        )
    }
}