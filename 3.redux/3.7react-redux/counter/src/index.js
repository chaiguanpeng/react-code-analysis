import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter'
import Todo from './components/Todo'

//react-redux提供了一个Provider组件,这里需要将store传入
import store from "./store"
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store = {store}>
        <div>
            <Counter />
            <Todo />
        </div>
    </Provider>
    , document.getElementById('root'));
