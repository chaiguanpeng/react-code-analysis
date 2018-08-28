import React from "react";
import {Provider as P} from "./context";
//只提供服务  将store用于别人消费
export default class Provider extends React.Component {
    render() {
        // console.log("provider",this.props.store);
        return (
            <P value = {this.props.store}>
                {this.props.children}
            </P>
        )
    }
}