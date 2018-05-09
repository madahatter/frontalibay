import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Login';
import { Register } from './Register';
import Navbar from './Navbar.js';
import './App.css';
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar email={this.props.email} name={this.props.name}/>
        <div>
          <Container>
            <Row>
              <Col xs={6} md={2}>
                <h4>Categories</h4>
                <ul>
                  <li>Phones and Accessories</li>
                  <li>Jewelry and Watches</li>
                  <li>Consumer Electronics</li>
                  <li>Cars</li>
                </ul>
              </Col>
              <Col xs={12} md={10}>
                <h1>Jumbotron</h1>
                <div>
                  <Row>
                    <Col><img src="https://picsum.photos/700/400" /></Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}