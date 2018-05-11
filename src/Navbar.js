import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

class Navbar extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      searchInput: "",
      isOpen: false
    };
  }

  toggle = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.searchInput);
    this.setState({ searchInput: "" });
  };
  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    return (
      <div className="navbar navbar-light">
        <NavbarBrand className="img">
          <Link to="/">
            <img src="https://i.imgur.com/39QKayV.png" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className="hamburger-sm" />

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

        <div className="nav-links">
            <Button bsClass="btn-block" outline color="warning">
            <Link to={"/buyer"}>
                <div>{this.props.name !== "" ? this.props.name : "Account"}</div>
            </Link>
          </Button>
          <Button bsClass="btn-block" outline color="warning">
            <Link to={"/cart"}>
              Cart {this.props.cartItems > 0 ? this.props.cartItems : ""}
            </Link>
          </Button>
          <Button bsClass="btn-block" outline color="primary">
            <Link to={"/createlisting"}> Sell Item </Link>
          </Button>
          <Button bsClass="btn-block" outline color="danger">
            <Link to={"/login"}> Login </Link>
          </Button>
          <Button bsClass="btn-block" outline color="success">
            <Link to={"/register"}> Register </Link>
          </Button>
        </div>
        
        <NavbarToggler onClick={this.toggle} className="hamburger" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button
                bsClass="btn-block"
                style={{ width: "100%", margin: "2px" }}
                outline
                color="warning"
              >
                <Link to={"/cart"}>
                  Cart {this.props.cartItems > 0 ? this.props.cartItems : ""}
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                bsClass="btn-block"
                style={{ width: "100%", margin: "2px" }}
                outline
                color="primary"
              >
                <Link to={"/createlisting"}> Sell Item </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                bsClass="btn-block"
                style={{ width: "100%", margin: "2px" }}
                outline
                color="danger"
              >
                <Link to={"/login"}> Login </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                bsClass="btn-block"
                style={{ width: "100%", margin: "2px" }}
                outline
                color="success"
              >
                <Link to={"/register"}> Register </Link>
              </Button>
            </NavItem>

            <div className="nav-links">
              <Button bsClass="btn-block" outline color="warning">
                <Link to={"/cart"}>
                  <div>
                    {this.props.name === "" ? "Account" : this.props.name}
                  </div>
                </Link>
              </Button>

              <Button bsClass="btn-block" outline color="primary">
                <Link to={"/cart"}>
                  Cart {this.props.cartItems > 0 ? this.props.cartItems : ""}
                </Link>
              </Button>
              <Button bsClass="btn-block" outline color="danger">
                <Link to={"/createlisting"}> Sell Item </Link>
              </Button>
              <Button bsClass="btn-block" outline color="success">
                <Link to={"/login"}> Login </Link>
              </Button>
              <Button bsClass="btn-block" outline color="danger">
                <Link to={"/register"}> Register </Link>
              </Button>
            </div>
          </Nav>
        </Collapse>
      </div>
    );
  }
}

export default Navbar;
