import React, {Component} from 'react';
import ListingCard from './ListingCard';

let itemsList = []
export default class SearchedItems extends React.Component {
  
  render(){
    return(
      <ul>
        {this.props.searchResults.map(item => <ListingCard {...item} addCartItem={this.props.addCartItem} />)}
      </ul>
    )
  }
}