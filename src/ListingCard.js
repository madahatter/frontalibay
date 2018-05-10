import React, { Component } from 'react';


class ListingCard extends React.Component {
    handleClick = (itemId) => {
    this.props.addCartItem(itemId)
    } 
  render() {
    return (
        <ul>
            <li>{this.props.itemTitle} <button onClick={() => this.handleClick(this.props.itemId)}>Add to cart</button></li>
            <li>{this.props.itemBlurb}</li>
            <li>{this.props.itemPrice}</li>
        </ul>
    )
  }
}

export default ListingCard;