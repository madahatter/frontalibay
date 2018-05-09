import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
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
        </div>
      </div>
    );
  }
}