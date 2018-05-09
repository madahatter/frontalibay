import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Link } from 'react-router-dom';
import { login } from './requests.js';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      emailInput: "",
      passwordInput: "",
      redirect  : false
    }
  }
  handleEmail = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  handlePassword = (event) => {
    this.setState({ passwordInput: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    login(
      this.state.emailInput,
      this.state.passwordInput)
      .then(
        res => {
          console.log(res)
          // if (res.success) {
            this.props.setEmail(this.state.emailInput)
            this.setState({ emailInput: "", passwordInput: "" , redirect : true})
          // }
        })
  }
  render() {
    if(this.state.redirect === true){
      return (
        <Redirect to="/"/>
      )
    }
    if(this.state.redirect === false){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" placeholder="Email" onChange={this.handleEmail}></input>
            </div>
            <input type="password" placeholder="Password" onChange={this.handlePassword}></input>
            <div>
              <input type="submit" />
            </div>
            <Route>
              <Link to={"/"}> Link to homepage </Link>
            </Route>
          </form>
        </div>
      )
    }
  }
}

export default Login;