import React, { Component } from 'react';
import { Register } from './Register';
import {Button, Row, Col} from 'reactstrap'


export default class Example extends React.Component {
  render() {
    return (
      <Row>
        <h1>Hot deal of the day</h1>
        <Row>
          <Col>
          <img src="https://picsum.photos/700/400" />
          </Col>
        </Row>
      </Row>
    );
  }
}