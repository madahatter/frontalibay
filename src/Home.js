import React, { Component } from 'react';
import { Register } from './Register';
import {Button, Row, Col} from 'reactstrap'


export default class Example extends React.Component {
  render() {
    return (
        <Row>
          <Col>
          <img className="home-img" src="https://picsum.photos/700/400" />
          </Col>
        </Row>
    );
  }
}