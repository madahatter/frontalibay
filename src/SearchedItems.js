import React, {Component} from 'react';


let itemsList = []
export default class SearchedItems extends React.Component {
  
  render(){
    return(
      <ul>
        {this.props.searchResults.map(e => <li>{e.name}</li>)}
      </ul>
    )
  }
}