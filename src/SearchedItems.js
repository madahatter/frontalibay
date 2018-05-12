import React, {Component} from 'react';
import ListingCard from './ListingCard';
import {CardGroup} from 'reactstrap'

let itemsList = []
export default class SearchedItems extends React.Component {
  render(){
    return(
      <CardGroup className="listingCard">
        {this.props.searchResults.map(item => 
          <ListingCard {...item} addCartItem={this.props.addCartItem} />
        )}
      </CardGroup>
    )
  }
}