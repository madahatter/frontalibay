import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Login';
import { Register } from './Register';
import NavBar from './Navbar.js';
import Categories from './Categories.js'
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
        <NavBar email={this.props.email} name={this.props.name}/>
        <div>
          <Container>
            <Row>
              <Col xs={6} md={2}>
                <Categories/>
              </Col>
              <Col xs={12} md={10}>
                <h1>Hot deal of the day</h1>
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