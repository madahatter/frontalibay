import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { Register } from './Register';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      listings: [],
    }
  }

  componentDidMount() {
    fetch('/randomListings')
      .then((res) => res.json())
      .then((res) => this.setState({
        listings: res.map((listing) => ({
          src: '/' + listing.imageName,
          altText: listing.title,
          caption: '',
          header: listing.title
        }))
      }))
  }

  render() {
    return (
        <div >
          <UncontrolledCarousel className="frontCarousel" items={this.state.listings}/>
        </div>
    );
  }
}