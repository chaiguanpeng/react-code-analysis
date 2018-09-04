import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {fromJS} from "immutable";
import Counter from "./components/Counter";
import {Provider} from "react-redux";
import store from "./store"
ReactDOM.render(<Provider store={store}>
    <Counter />
</Provider>, document.getElementById('root'));

