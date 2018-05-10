import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Categories from './Categories'

class Cart extends React.Component {
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
            <Button>Checkout</Button>
          </Row>
        </div>
      </div>
    )
  }
}
export default Cart;