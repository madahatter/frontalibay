import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ListingCard extends React.Component {
    handleClick = () => {
    this.props.addCartItem(this.props.itemID)
    } 
  render() {
    return (
        <ul>
            <li><Link to={'/itemDetails/' + this.props.itemID}>{this.props.title}</Link> <button onClick={this.handleClick}>Add to cart</button></li>
            <li>{this.props.blurb}</li>
            <li>{this.props.price}</li>
            <li>{this.props.sellerID}</li>
            <li>{this.props.category}</li>
           <img src={'/' + this.props.imageName}/>
        </ul>
    )
  }
}

export default ListingCard;