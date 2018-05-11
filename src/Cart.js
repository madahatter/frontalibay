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
      <div className="card">
        <div>
          {this.state.cartList.map( det => (
            <div className="card">
              <Card>
                <img src={'/' + det.imageName}/>
                <CardBody>
                  <CardTitle><Link to={'/itemDetails/' + this.props.itemID}>{this.props.title}</Link></CardTitle>
                  <CardText>{det.blurb}</CardText>
                  <CardText>{det.price}</CardText>
                  <CardText>{det.sellerID}</CardText>
                  <CardText>{det.category}</CardText>
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
              <Link to="/checkout"> Checkout </Link>
            </Button>
        </div>
    );
  }
}
export default Cart;
