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
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Categories from "./Categories";
import ListingCard from './ListingCard';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      cartList: [],
      itemID: "",
      title: "abc",
      price: "30$",
      blurb: "lskdks",
      imageName: "",
=======
      cartList: []
>>>>>>> 291edd7d839dc7f5ded876facc8bf5034270241f
    };
  }

  getCart = () => {
    fetch('/itemCart?userID=' + this.props.email)
    .then((res)=> res.json())
    .then(resJSON => {
      console.log(resJSON)
      this.setState({cartList: resJSON})} )
  }
  componentDidMount(){
    this.getCart()
  }

  render() {
    return (
      <div>
        <div>
          {this.state.cartList.map( det => (
            <div className="cardbody">
              <Card className="card">
                <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
                <CardBody>
                  <CardTitle>{det.title}</CardTitle>
                  <CardText>{det.blurb}</CardText>
                  <CardText>{det.price}</CardText>
                  <Button>
                    <Link to="/sellerinfo/:sellerId">Seller's info</Link>
                  </Button>
                </CardBody>
                </Card>
            </div>
          ))}
          </div>
   
            <Button outline color="primary">
              <Link to="/"> Link to homepage </Link>
            </Button>
            <Button outline color="primary">
              <Link to="/cart/checkout"> Checkout </Link>
            </Button>
 
        </div>
    );
  }
}
export default Cart;
