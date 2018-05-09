import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let typedItem = ''

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      userInputItem: ''
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li className="navbar">
            Alibay
          </li>
          <li className="navbar">
            <form>
              <li>
                <input type="text" value={this.state.userInputItem} onChange={this.handleChange}></input>
              </li>
              <li>
                <input type="submit" />
              </li>
            </form>
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

export default NavBar;