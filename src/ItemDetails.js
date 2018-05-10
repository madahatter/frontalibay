import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "reactstrap";

export default class ItemDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      itemID: "",
      title: "",
      price: "",
      sellerID: "",
      blurb: "",
      imageName: "",
      category: ""
    };
  }

  getItemDetails = () => {
    console.log(this.props.id);
    fetch("/itemDetails/?itemid=" + this.props.id)
      .then(response => response.text())
      .then(details => {
        // console.log(details)
        // this.setState({
        //   itemID: itemID,
        //   title: title,
        //   price: price,
        //   sellerID: sellerID,
        //   blurb: blurb,
        //   imageName: "/backend/images/" + imageName,
        //   category: category
        // });
      });
  };

  componentWillMount(){
    this.getItemDetails()
  }

  componentDidMount() {
    fetch("/getItem?itemId=" + this.props.itemId);
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={6} md={6}>
            {this.state.imageName}
          </Col>
          <Col xs={12} md={4}>
            {this.state.blurb}
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
            <Button>
              <Link to="/cart/checkout"> Add to Cart </Link>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
