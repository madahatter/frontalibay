import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { NavbarBrand, Button } from "reactstrap";

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
        <NavbarBrand className="img">
          <img src="https://i.imgur.com/39QKayV.png" />
          <Link to="/" />
        </NavbarBrand>
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
        {this.props.name !== "" && <li>{this.props.name}</li>}
        <Button outline color="warning" style={{ margin: "2px" }}>
          <Link to={"/cart"}>
            {" "}
            Cart {this.props.cartItems > 0 ? this.props.cartItems : ""}
          </Link>
        </Button>
        <Button outline color="primary" style={{ margin: "2px" }}>
          <Link to={"/createlisting"}> Sell Item </Link>
        </Button>
        <Button outline color="danger" style={{ margin: "2px" }}>
          <Link to={"/login"}> Login </Link>
        </Button>
        <Button outline color="success" style={{ margin: "2px" }}>
          <Link to={"/register"}> Register </Link>
        </Button>
      </div>
    );
  }
}

export default Navbar;
