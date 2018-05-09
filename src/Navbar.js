import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li className="navbar">
            Alibay
                    </li>
          <li className="navbar">
            <input type="text"></input>
          </li>
          <li className="navbar">
            <input type="submit" />
          </li>
          {this.props.email !== '' && <li>{this.props.email}</li>}
          <li>
            <Link to={'/cart'}> Cart </Link>
          </li>
          <li className="navbar">
            <Link to={"/login"}> Login </Link>
          </li>
          <li className="navbar">
            <Link to={"/register"}> Register </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;