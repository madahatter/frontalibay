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
  constructor(props) {
    super(props);
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
 
  handleClickRemove = (itemID) => {
    this.props.removeCartItem(itemID)
    fetch('/itemCart', {
      credentials: 'same-origin'
    })
      .then((res) => res.json())
      .then(resJSON => {
        //console.log(resJSON)
        this.setState({ cartList: resJSON });
      })
  }
  // componentWillReceiveProps = (props)=> {
  //   this.setState({cartList: this.props.cartItems})
  // }

  componentDidMount() {
    this.getCart()
  }

  render() {
    console.log("item ", this.props.itemID)
    return (
      <div>
        <div>
        <CardGroup className="listingCard">
          {this.state.cartList.map( det => (
            <div>
                <Card body outline color="secondary">
                  <img className="cardImg" src={'/' + det.imageName}/>
                  <CardBody> 
                    <CardTitle><Link to={'/itemDetails/' + this.props.itemID}>{this.props.title}</Link></CardTitle>
                    <CardText className= "listingcrd">Description: {det.blurb}</CardText>
                    <CardText>Price: {det.price}</CardText>
                    <CardText>Seller: {det.sellerID}</CardText>
                    <CardText>Category: {det.category}</CardText>
                    <Button outline color="primary">
                      <Link to={"/itemsbySeller/" + det.sellerID}>Seller's info</Link>
                    </Button>
                    <Button outline color="primary" onClick={()=>this.handleClickRemove(det.itemID)}>
                      Remove from cart
                    </Button>
                  </CardBody>
                  </Card>
            </div>
          ))}
          </CardGroup>
        </div>
        <div>
          <div className="cartPay">
            {this.props.email && this.state.cartList.length > 0 ? <TakeMoney cartItems={this.props.cartItems} email={this.props.email} clearCartItems={this.props.clearCartItems} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
