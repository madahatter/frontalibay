import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Login from './Login';
import Register from './Register'
import './App.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: "",

    }
  }
  setEmail = (email) => {
    this.setState({ email })
  }

  renderLogin = routerData => {
    return (<Login setEmail={this.setEmail} />)
  }

  renderRegister = routerData => {
    return (<Register />)
  }

  renderHome = routerData => {
    return (<Home />)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/login' render={this.renderLogin} />
            {/* <Route exact path='/register' render={this.renderRegister} /> */}
            <Route exact path='/' render={this.renderHome} />
          </div>
        </BrowserRouter>
      </div >
    );
  }

}
