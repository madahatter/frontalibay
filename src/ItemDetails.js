import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "reactstrap";
import ListingCard from './ListingCard';

export default class ItemDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      item: null,
      imageName: "",
      title: "",
      description: "",
      category: "",
      price: ""
    }
  }

  componentDidMount() {
    fetch('/itemDetails?itemID=' + this.props.itemID)
      .then(res => res.text())
      .then(res => {
        //console.log(res)
        this.setState({
          imageName: JSON.parse(res).imageName,
          item: JSON.parse(res),
          title: JSON.parse(res).title,
          description: JSON.parse(res).blurb,
          category: JSON.parse(res).category,
          price: JSON.parse(res).price
        })
      })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <div>
              {this.state.title ? <h3> Item Name: {this.state.title} </h3> : null}
              {this.state.description ? <h4> Description: {this.state.description} </h4> : null}
            </div>
            <div>
              {this.state.imageName ? <img src={'/' + this.state.imageName} /> : null}
            </div>
          </Col>
        </Row>
        <Row>
            <Button outline color="primary">
              {this.state.item ? <Link to={"/itemsbySeller/" + this.state.item.sellerID}> Link to Seller's page </Link> : null}
            </Button>
         
            <Button outline color="primary">
              <Link to="/cart/checkout/"> Add to Cart </Link>
            </Button>
        </Row>
      </div>
    );
  }
}
