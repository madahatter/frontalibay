import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Link } from "react-router-dom";
import { Button, NavbarBrand } from 'reactstrap'
import { register } from "./requests.js";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: "",
      nameInput: "",
      passwordInput: "",
      redirect: false
    };
  }
  handleEmail = event => {
    this.setState({ emailInput: event.target.value });
  };

  handleName = event => {
    this.setState({ nameInput: event.target.value });
  };

  handlePassword = event => {
    this.setState({ passwordInput: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    register(
      this.state.emailInput,
      this.state.passwordInput,
      this.state.nameInput
    ).then(
      this.setState({
        emailInput: "",
        nameInput: "",
        passwordInput: "",
        redirect: true
      })
    );
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    if (this.state.redirect === false) {
      return (
        <div>
          <NavbarBrand className="img">
          <Link to="/">
            <img src="https://i.imgur.com/39QKayV.png" />
          </Link>
          </NavbarBrand>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input className="loginRegister" placeholder="Email" type="email" onChange={this.handleEmail} />
            </div>
            <div>
              <input className="loginRegister" placeholder="Name" type="text" onChange={this.handleName} />
            </div>
            <div>
              <input className="loginRegister" placeholder="Password" type="password" onChange={this.handlePassword} />
            </div>
            <div>
              <input className="loginRegister" type="submit" />
            </div>
          </form>
        </div>
          );
        }
      }
    }
    
    export default Register;
