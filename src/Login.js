import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Link } from "react-router-dom";
import { login } from "./requests.js";
import { Button,NavbarBrand } from "reactstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: "",
      passwordInput: "",
      redirect: false
    };
  }
  handleEmail = event => {
    this.setState({ emailInput: event.target.value });
  };

  handlePassword = event => {
    this.setState({ passwordInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    login(this.state.emailInput, this.state.passwordInput).then(res => {
      if (res.success) {
        this.props.setEmail(this.state.emailInput, res.name);
        this.setState({ emailInput: "", passwordInput: "", redirect: true });
      }
    });
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
              <input className="loginRegister" type="text" value={this.state.emailInput} placeholder="Email" onChange={this.handleEmail}/>
            </div>
            <input className="loginRegister" type="password" value={this.state.passwordInput} placeholder="Password" onChange={this.handlePassword}/>
            <div className="loginRegister">
              <input className="loginRegister" type="submit" />
            </div>
            <Button className="loginRegister" outline color="primary">
              <Link to={"/"}> Link to homepage </Link>
            </Button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
