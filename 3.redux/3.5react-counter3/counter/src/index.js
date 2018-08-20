import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Compute from "./components/Compute";
import Todo from "./components/Todo";
ReactDOM.render(
    <div>
        <Counter />
        <Compute />
        <Todo />
    </div>, document.getElementById('root'));
