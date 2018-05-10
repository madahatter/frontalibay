import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Categories from './Categories'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';

export default class ItemDetails extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    fetch('/getItem?itemId=' + this.props.itemId)
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={6} md={6}>
            <img src="https://picsum.photos/700/400" />
          </Col>
          <Col xs={12} md={4}>
            Lorem ipsum dolor sit amet, platea fermentum sunt fusce, metus sit sed elit,
            amet dapibus, bibendum ullamcorper ante tristique, expedita condimentum tellus fames sit.
            Fusce orci sed est, quis proin arcu, vel mi in sit a tellus. Vel quisque egestas sed nullam.
            Nibh mi sed enim, mattis congue dictum, semper arcu, vitae malesuada et mollis.
            Eleifend diam dictum at sollicitudin felis justo. Quisque eu posuere, mi fermentum, suspendisse
            enim justo nibh dolor. Phasellus risus eros id. Lectus magna quam, nec vestibulum leo ultrices quam,
            pede taciti et odio bibendum nullam, eget enim, dui amet scelerisque qui in arcu aliquam.
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>
              <Link to='/sellerinfo'> Link to Seller's page </Link>
            </Button>
          </Col>
          <Col>
            <Button>
              <Link to='/'> Link to homepage </Link>
            </Button>
          </Col>
          <Col>
            <Button> Add to cart</Button>
          </Col>
        </Row>
      </div>
    )
  }
}