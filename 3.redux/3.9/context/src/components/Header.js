import React from "react";
import Title from "./Title";
import propTypes from "prop-types";
export default class Counter extends React.Component {
    static contextTypes = {
        col:propTypes.string
    };
    render() {
        return (
            <div>
                <Title />
                <p style={{color:this.context.col}}>爸爸</p>
            </div>
        )
    }
}