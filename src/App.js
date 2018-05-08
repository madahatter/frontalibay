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

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
    }
  }
  setEmail = (email) => {
    this.setState({email})
  }
  renderLogin = routerData => {
    return (<Login setEmail={this.setEmail}/>)
  }
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
