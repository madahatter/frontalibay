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
        <div>
          <h1>List of seller's items</h1>
        </div>
        <CardGroup className="card">
        {this.state.items.map(item => (<ListingCard {...item} addCartItem={this.props.addCartItem} />))}
        </CardGroup>

          {/* <div>
            <h1>List of seller's items</h1>
            <div>
              {this.state.items.map(item => (
                <ListingCard {...item} addCartItem={this.props.addCartItem} />
              ))}
            </div>
          </div> */}
      </div>
    );
  }
}

export default SellerInfo;
