import React from "react";
import {Provider as P} from "./context";
//只提供服务  将store用于别人消费
export default class Provider extends React.Component {
    render() {
        return (
            <P store = {this.props.store}>
                {this.props.store}
            </P>
        )
    }
}