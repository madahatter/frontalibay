import React, { Component } from 'react'
import ListingCard from "./ListingCard";
import { Link } from "react-router-dom";
import {CardGroup} from "reactstrap";

class Buyer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/allItemBuyer?buyerID=' + this.props.buyerID)
      .then(res => res.json())
      .then(res => { this.setState({ items: this.state.items.concat(res) }) })
  }

  render() {
    return (
      <div>
        <div className="buyerH1">
          <h1>Items purchased</h1>
        </div>
        <CardGroup className="listingCard">
          {this.state.items.map(item => (<ListingCard {...item} buyerPage={true}/>))}
        </CardGroup>
      </div>
    );
  }
}
    
export default Buyer