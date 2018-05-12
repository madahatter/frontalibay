import React, { Component } from 'react'
import ListingCard from "./ListingCard";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

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
    // console.log(this.props)
    console.log(this.state.items)
    return (
      <div className="mainContent">
          <div>
            <h1>History of all Items purchased</h1>
            <div>
              {this.state.items.map(item => (
                <ListingCard {...item} buyerPage={true}/>
              ))}
            </div>
          </div>
      </div>
    );
  }
}
    
export default Buyer