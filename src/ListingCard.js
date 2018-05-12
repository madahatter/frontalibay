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
    constructor() {
        super()
        this.state = {
        }
    }
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

          <Card>
            <div className="listingMainDiv">
            <div className="imgDiv">
              <img className="listingImg" src={'/' + this.props.imageName}/>
            </div>
            </div>
            <CardBody>
              <CardTitle><Link to={'/itemDetails/' + this.props.itemID}>{this.props.title}</Link></CardTitle>
              <CardText>Description: {this.props.blurb}</CardText>
              <CardText>Price: {this.props.price}$</CardText>
              <CardText>SellerID: {this.props.sellerID}</CardText>
              <CardText>Category: {this.props.category}</CardText>
              <Button outline color="primary">
                <Link to={"/itemsbySeller/" + this.props.sellerID}>Seller's info</Link>
              </Button>
              {this.props.buyerPage === true ? null :
                <Button outline color="primary" onClick={this.handleClick}>
                  Add to cart
                </Button>
              }
              
            </CardBody>
          </Card>

        </div>
    )
  }
}

export default ListingCard;