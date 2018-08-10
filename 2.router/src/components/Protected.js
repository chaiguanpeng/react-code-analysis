import React, {Component} from 'react';
import  {Route,Redirect} from"../react-router-dom";
//rest = {path}
export default function ({component:Component,...rest}) {
    console.log(rest);
    return (
        // localStorage.getItem('logined')? <Component />
            <Route {...rest} render={props=>(
                localStorage.getItem('logined')? <Component {...props}/> :<Redirect to={{pathname:'/login',state:{from :props.location.pathname}}}/>
            )}/>
    )
}