import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Link } from "react-router-dom";
import {Button, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
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
          <img src="https://cdn.store-assets.com/s/204782/f/477895.png" />
          {/* <form onSubmit={this.handleSubmit} className="loginRegister">
            <div>
              <input
                placeholder="Email"
                type="email"
                onChange={this.handleEmail}
              />
            </div>
            <div>
              <input
                placeholder="Name"
                type="text"
                onChange={this.handleName}
              />
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                onChange={this.handlePassword}
              />
            </div>
            <div>
              <input type="submit" />
            </div>
            <Button outline color="primary">
             <Link to="/"> Link to homepage </Link>
            </Button>
          </form> */}
          <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        </Form>
        </div>
      );
    }
  }
}

export default Register;
