import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Seller extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
            <h1>Seller' Information</h1>
            Lorem ipsum dolor sit amet, platea fermentum sunt fusce, metus sit sed elit,
            amet dapibus, bibendum ullamcorper ante tristique, expedita condimentum tellus fames sit.
            Fusce orci sed est, quis proin arcu, vel mi in sit a tellus. Vel quisque egestas sed nullam.
            Nibh mi sed enim, mattis congue dictum, semper arcu, vitae malesuada et mollis.
            Eleifend diam dictum at sollicitudin felis justo. Quisque eu posuere, mi fermentum, suspendisse
            enim justo nibh dolor. Phasellus risus eros id. Lectus magna quam, nec vestibulum leo ultrices quam,
            pede taciti et odio bibendum nullam, eget enim, dui amet scelerisque qui in arcu aliquam.
          </Col>
          <Col xs={12} md={4}>
            <h1>List of seller's items</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>
              <Link to='/'> Link to homepage </Link>
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}