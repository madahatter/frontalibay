import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Categories from "./Categories";
import ListingCard from './ListingCard';
import TakeMoney from './TakeMoney.js';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  getCart = () => {
    fetch('/itemCart', {
      credentials: 'same-origin'
    })
    .then((res)=> res.json())
    .then(resJSON => {
      console.log(resJSON)
      this.setState({cartList: resJSON});
    } )
  }
  componentDidMount(){
    this.getCart()
  }

  render() {
    return (
      <div>
        <div>
        <CardGroup className="card">
          {this.state.cartList.map( det => (
            <div>
                <Card body outline color="secondary">
                  <img className="cardImg" src={'/' + det.imageName}/>
                  <CardBody> 
                    <CardTitle><Link to={'/itemDetails/' + this.props.itemID}>{this.props.title}</Link></CardTitle>
                    <CardText>Description: {det.blurb}</CardText>
                    <CardText>Price: {det.price}</CardText>
                    <CardText>Seller: {det.sellerID}</CardText>
                    <CardText>Category: {det.category}</CardText>
                    <Button outline color="primary">
                      <Link to={"/itemsbySeller/" + det.sellerID}>Seller's info</Link>
                    </Button>
                  </CardBody>
                  </Card>
            </div>
          ))}
          </CardGroup>
          </div>
        <div>
        <Button outline color="primary">
          <Link to="/"> Link to homepage </Link>
        </Button>
          {this.props.email ? <TakeMoney cartItems={this.props.cartItems} email={this.props.email} clearCartItems={this.props.clearCartItems}/> : null}
        </div>
      </div>
    );
  }
}
export default Cart;
