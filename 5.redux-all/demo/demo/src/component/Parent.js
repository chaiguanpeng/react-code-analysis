import React from "react";

export default class Parent extends React.Component {
    render() {
        console.log(this.props.children);
        return (
            <div>{this.props.children}</div>
        )
    }
}