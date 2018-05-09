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
  Col,
  Collapse
} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar email={this.props.email} name={this.props.name}/>
        <div>
<<<<<<< HEAD
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
            <li>
              <Link to={'/cart'}> Cart </Link>
            </li>
            <li className="navbar">
              <Link to={"/login"}> Login </Link>
            </li>
            <li className="navbar">
              <Link to="/register"> Register </Link>
            </li>
          </ul>
          <div>
            <Container>
              <Row>
                <Col xs={12} md={2}>
                  <h4>Categories</h4>
                  <div>Phones and Accessories</div>
                  <div>Jewelry and Watches</div>
                  <div>Consumer Electronics</div>
                  <div>Cars</div>
                </Col>
                <Col xs={12} md={10}>
                  <h1>Jumbotron</h1>
                  <div>
                    <Row>
                      <Col xs={12} md={2}>img1</Col>
                      <Col xs={12} md={2}>img2</Col>
                      <Col xs={12} md={2}>img3</Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={2}>img4</Col>
                      <Col xs={12} md={2}>img5</Col>
                      <Col xs={12} md={2}>img6</Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
=======
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
>>>>>>> 67bf31e983ac906388493de0f5ede60f62f4daab
        </div>
      </div>
    );
  }
}