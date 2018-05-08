import React, {Component} from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { register } from './requests.js';

class Register extends React.Component{
  constructor() {
    super()
    this.state = {
      emailInput: "",
      nameInput: "",
      passwordInput: "",
    }
  }
  handleEmail = (event) => {
    this.setState({emailInput: event.target.value});
  }

  handleName = (event) => {
    this.setState({nameInput: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({passwordInput: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    register(
      this.state.emailInput,
      this.state.passwordInput,
      this.state.nameInput)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
          <input placeholder="Email" type="email" onChange={this.handleEmail}></input>
        </div>
        <div>
          <input placeholder="Name" type="text" onChange={this.handleName}></input>
        </div>
        <div>
          <input placeholder="Password" type="password" onChange={this.handlePassword}></input>
        </div>
        <div>
          <input type="submit"/>
        </div>
        </form>
        <Route>
          <Link to={"/"}> Link to homepage </Link>
        </Route>
      </div>
    )
  }
}

export default Register;