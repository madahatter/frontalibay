import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


class ListingCard extends React.Component {
    handleClick = () => {
    this.props.addCartItem(this.props.itemID)
    } 
  render() {
    return (
        <div>
          {/* <img src={'/' + this.props.imageName}/>
          <div><Link to={'/itemDetails/' + this.props.itemID}>{this.props.title}</Link> <button onClick={this.handleClick}>Add to cart</button></div>
          <div>{this.props.blurb}</div>
          <div>{this.props.price}</div>
          <div>{this.props.sellerID}</div>
          <div>{this.props.category}</div> */}

          <Card className="card">
            <CardImg src={'/' + this.props.imageName}/>
            <CardBody>
              <CardTitle><Link to={'/itemDetails/' + this.props.itemID}>{this.props.title}</Link></CardTitle>
              <CardText>{this.props.blurb}</CardText>
              <CardText>{this.props.price}</CardText>
              <CardText>{this.props.sellerID}</CardText>
              <CardText>{this.props.category}</CardText>
              <Button>
                  <Link to="/sellerinfo/:sellerId">Seller's info</Link>
              </Button>
              <Button onClick={this.handleClick}>
                Add to cart
              </Button>
            </CardBody>
          </Card>

        </div>
    )
  }
}

export default ListingCard;