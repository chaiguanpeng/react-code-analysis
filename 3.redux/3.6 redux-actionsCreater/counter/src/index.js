import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter'
import Todo from './components/Todo'
ReactDOM.render(
    <div>
        <Counter />
        <Todo />
    </div>
    , document.getElementById('root'));
