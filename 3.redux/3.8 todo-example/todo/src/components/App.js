import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from './TodoList';
import TodoFooter from "./TodoFooter"
export default class Counter extends React.Component {
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <TodoHeader />
                                </div>
                                <div className="panel-body">
                                    <TodoList />
                                </div>
                                <div className="panel-footer">
                                    <TodoFooter />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}