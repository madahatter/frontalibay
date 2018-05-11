import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "reactstrap";
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
    fetch("/itemsbySeller?sellerID=" + this.props.sellerID)
      .then(res => res.json())
      .then(res => {
        this.setState({ items: res });
      });
  }

  render() {
    return (
      <div>
        <Row>
          <div>
            <h1>Seller' Information</h1>
            Lorem ipsum dolor sit amet, platea fermentum sunt fusce, metus sit
            sed elit, amet dapibus, bibendum ullamcorper ante tristique,
            expedita condimentum tellus fames sit. Fusce orci sed est, quis
            proin arcu, vel mi in sit a tellus. Vel quisque egestas sed nullam.
            Nibh mi sed enim, mattis congue dictum, semper arcu, vitae malesuada
            et mollis. Eleifend diam dictum at sollicitudin felis justo. Quisque
            eu posuere, mi fermentum, suspendisse enim justo nibh dolor.
            Phasellus risus eros id. Lectus magna quam, nec vestibulum leo
            ultrices quam, pede taciti et odio bibendum nullam, eget enim, dui
            amet scelerisque qui in arcu aliquam.
          </div>
          <div>
            <h1>List of seller's items</h1>
            <div>
              adadasdasafdasfaf
              {this.state.items.map(item => (
                <ListingCard {...item} addCartItem={this.props.addCartItem} />
              ))}
            </div>
          </div>
        </Row>
        <Row>
          <Button>
            <Link to="/"> Link to homepage </Link>
          </Button>
        </Row>
      </div>
    );
  }
}

export default SellerInfo;
