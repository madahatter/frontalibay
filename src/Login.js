import React, {Component} from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { login } from './requests.js';

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      emailInput: "",
      passwordInput: "",
    }
  }
  handleEmail = (event) => {
    this.setState({emailInput: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({passwordInput: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    login(
      this.state.emailInput,
      this.state.passwordInput)
      .then(
      res => { if(res.success) {this.props.setEmail(this.state.emailInput)}})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="email" onChange={this.handleEmail}></input>
          </div>
            <input type="password" placeholder="Password" onChange={this.handlePassword}></input>
          <div>
            <input type="submit"/>
          </div>
          <Route>
            <Link to={"/"}> Link to homepage </Link>
          </Route>
        </form>
      </div>
    )
  }
}

export default Login;