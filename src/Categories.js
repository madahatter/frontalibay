import React, { Component } from 'react'
import {Button, Row, Col} from 'reactstrap'

class Categories extends React.Component {
  handleClick = (searchTerm) => {
    // console.log(searchTerm)
    this.props.search(searchTerm, {category: true});
  }
  render() {
    return (
      <Row>
          <Col>
            <li><Button bsClass="btn-block" style={{width:"100%", "margin-bottom":"3px"}} outline color="warning" onClick={() => this.handleClick('Jewelry')}>Jewelry and Watches</Button></li>
            <li><Button bsClass="btn-block" style={{width:"100%", "margin-bottom":"3px"}} outline color="primary" onClick={() => this.handleClick('Phones')}>Phones and Accessories</Button></li>
            <li><Button bsClass="btn-block" style={{width:"100%", "margin-bottom":"3px"}} outline color="danger"  onClick={() => this.handleClick('Electronics')}>Consumer Electronics</Button></li>
            <li><Button bsClass="btn-block" style={{width:"100%", "margin-bottom":"3px"}} outline color="success" onClick={() => this.handleClick('Cars')}>Cars</Button></li>
          </Col>
      </Row>   
    )
  }
}

export default Categories;