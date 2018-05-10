import React, { Component } from 'react';


class ListingCard extends React.Component {
    handleClick = () => {
    this.props.addCartItem(this.props.itemId)
    } 
  render() {
    return (
        <ul>
            <li>{this.props.title} <button onClick={this.handleClick}>Add to cart</button></li>
            <li>{this.props.blurb}</li>
            <li>{this.props.price}</li>
            <li>{this.props.sellerID}</li>
            <li>{this.props.category}</li>
        </ul>
    )
  }
}

export default ListingCard;