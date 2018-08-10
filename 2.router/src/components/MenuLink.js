import React, {Component} from 'react';
import {Route,Link} from "../react-router-dom";
import "./MenuLink.css";
//渲染Route有三种方式 component render children
export default ({to,exact=false,label})=>(
    <Route path = {to} exact= {exact} children={
        ({match})=> <li className={match? 'active': ''}><Link to={to}>{label}</Link></li>
    }/>
)