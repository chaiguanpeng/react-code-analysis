import React from 'react';
import ReactDOM from 'react-dom';
import Parent from "./component/Parent"
import Child1 from "./component/Child1"
import Child2 from "./component/Child2"
ReactDOM.render(<Parent>
        <Child1 />
        <Child2 />
    </Parent>, document.getElementById('root'));
