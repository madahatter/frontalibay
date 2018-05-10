import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "reactstrap";

export default class ItemDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      item: null
    }
  }

  componentDidMount() {
    fetch('/getItem?itemID=' + this.props.itemID)
      .then(res => res.json())
      .then(res => { this.setState({ item: res }) })
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={6} md={6}>
            <div>
              {this.state.item ? <ListingCard {...this.state.item} addCartItem={this.props.addCartItem} /> :
              <div> Loading</div>}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>
              <Link to="/sellerinfo"> Link to Seller's page </Link>
            </Button>
          </Col>
          <Col>
            <Button>
              <Link to="/"> Link to homepage </Link>
            </Button>
          </Col>
          <Col>
            <Button> Add to cart </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
