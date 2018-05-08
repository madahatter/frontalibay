import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Login from './Login';
import Register from './Register'
import './App.css';

// Render Login Page
let renderLogin = routerData => {
  return (<Login />)
}

// Render Register Page
let renderRegister = routerData => {
  return (<Register />)
}

// Render Home Page
let renderHome = routerData => {
  return (<Home />)
}

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/login' render={renderLogin} />
            <Route exact path='/register' render={renderRegister} />
            <Route exact path='/' render={renderHome} />
          </div>
        </BrowserRouter>
      </div >
    );
  }
}
