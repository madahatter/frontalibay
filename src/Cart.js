import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import NavBar from './Navbar';
import Categories from './Categories'

export default class Cart extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Row>
              <Col>
                Map of the items list with a button to remove
              </Col>
            </Row>
          </div>
          <Row>
            <Button>
              <Link to='/'> Link to homepage </Link>
            </Button>
            <Button>
              <Link to='/cart/checkout'> Checkout </Link>
            </Button>
          </Row>
        </div>
      </div>
    )
  }
}