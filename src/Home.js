import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Login';
import { Register } from './Register';
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

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <div>
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
          <div>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <h4>Categories</h4>
                  <ul>
                    <li>Phones and Accessories</li>
                    <li>Jewelry and Watches</li>
                    <li>Consumer Electronics</li>
                    <li>Cars</li>
                  </ul>
                </Col>
                <Col xs={12} md={8}>
                  <h1>Jumbotron</h1>
                  <div>
                    <Row>
                      <Col><img src="https://picsum.photos/700/400"/></Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}