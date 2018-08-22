import React from "react";
import propTypes from "prop-types";
export default class Counter extends React.Component {
    static contextTypes = {
        col:propTypes.string
    };
    render() {
        return (
            <div style={{color:this.context.col}}>title</div>
        )
    }
}