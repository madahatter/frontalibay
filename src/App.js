import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Login from './Login';
import Register from './Register'
import './App.css';
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  NavbarBrand,
  Navbar
} from 'reactstrap';

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
          <Navbar>
            <ul>
            <li className="navbar">
                Alibay
              </li>
              <li className="navbar">
                <input type="text"></input>
              </li>
              <li className="navbar">
                <input type="submit" />
              </li>
              <li className="navbar">
                <Link to={"/login"}> Login </Link>
              </li>
              <li className="navbar">
                <Link to={"/register"}> Register </Link>
              </li>
            </ul>
          </Navbar>
          <div>
            <Row>
              <Col xs={6} md={4}>
                <h4>Categories</h4>
                <ul>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                  <li>d</li>
                </ul>
              </Col>
              <Col xs={12} md={8}>
                <h1>Jumbotron</h1>
                <p>Loren Ipsum</p>
              </Col>
            </Row>
            <div>
              <Route exact path='/login' render={renderLogin} />
              <Route exact path='/register' render={renderRegister} />
            </div>
          </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}
