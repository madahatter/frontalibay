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
          <NavBar />
          <div>
            <Row>
              <Col>
                <h1>Cart Items</h1>
                <Categories />
              </Col>
              <Col>
                Map of the items list with a button to remove
              </Col>
            </Row>
          </div>
          <Row>
            <Button>
              <Link to='/'> Link to homepage </Link>
            </Button>
            <Button>Checkout</Button>
          </Row>
        </div>
      </div>
    )
  }
}