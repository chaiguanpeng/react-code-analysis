import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./Counter"
import store from "./store";
import {Provider} from "./react-redux";

ReactDOM.render(<Provider store = {store}>
        <Counter />
    </Provider>
    , document.getElementById('root'));
