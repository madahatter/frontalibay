import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.searchInput);
  };
  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };
  render() {
    return (
      <div className="navbar">
        <div>
          Alibay
          {/* <img src="https://cdn.store-assets.com/s/204782/f/477895.png" className="smallLogo"/> */}
        </div>
        <div className="navSearch">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </div>
        {this.props.email !== "" && <li>{this.props.email}</li>}
        {this.props.name !== "" && <li>{this.props.name}</li>}
        <div>
          <Link to={"/"}> Sell </Link>
        </div>
        <div>
          <Link to={"/cart"}> Cart </Link>
        </div>
        <div>
          <Link to={"/login"}> Login </Link>
        </div>
        <div>
          <Link to={"/register"}> Register </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
