import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {CardGroup} from "reactstrap";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";

class SellerInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch('/itemsbySeller?sellerID=' + this.props.sellerID)
      .then(res => res.json())
      // .then((res) => {console.log(res)})
      .then(res => { this.setState({ items: this.state.items.concat(res) }) })
  }

  render() {
    return (
      <div>
        <div className="sellerH1">
          <h1>Seller's items</h1>
        </div>
        <CardGroup className="listingCard">
        {this.state.items.map(item => (<ListingCard {...item} addCartItem={this.props.addCartItem} />))}
        </CardGroup>
      </div>
    );
  }
}

export default SellerInfo;
