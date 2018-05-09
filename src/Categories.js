import React, { Component } from 'react'

class Categories extends React.Component {
  handleClick = (searchTerm) => {
    this.props.search(searchTerm, this.props.routerData);
  }
  render() {
    return (
      <div>
        <h4>Categories</h4>
        <ul>
          <li><button onClick={() => this.handleClick('Phones')}>Phones and Accessories</button></li>
          <li><button onClick={() => this.handleClick('Jewelry')}>Jewelry and Watches</button></li>
          <li><button onClick={() => this.handleClick('Electronics')}>Consumer Electronics</button></li>
          <li><button onClick={() => this.handleClick('Cars')}>Cars</button></li>
        </ul>
      </div>
    )
  }
}

export default Categories;