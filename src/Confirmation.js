import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {NavbarBrand} from 'reactstrap'

class Confirmation extends React.Component {
    constructor() {
      super();
      this.state = {
        items: []
      };
    }
  render() {
    return (
      <div>
        <div>
          <h1>Purchase Order No.{Math.floor(Math.random() * 100000)}</h1>
        </div>
      </div>
    );
  }
}

export default Confirmation;
