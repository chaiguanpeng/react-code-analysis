import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Compute from "./components/Compute";
ReactDOM.render(
    <div>
        <Counter />
        <Compute />
    </div>, document.getElementById('root'));
