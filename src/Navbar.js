import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchInput: "",
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.search(this.state.searchInput)

    }
    handleChange = (event) => {
        this.setState({ searchInput: event.target.value });
    }
    render() {
        return (
            <div className="navbar">
                <div>Alibay</div>
                <div className="navSearch">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.searchInput} onChange={this.handleChange}></input>
                        <input type="submit" />
                    </form>
                </div>
                {this.props.name !== '' && <li>{this.props.name}</li>}
                <div>
                    <Link to={'/cart'}> Cart {this.props.cartItems > 0 ? this.props.cartItems: ""} </Link>
                </div>
                <div>
                    <Link to={"/login"}> Login </Link>
                </div>
                <div>
                    <Link to={"/register"}> Register </Link>
                </div>
            </div>
        )
    }
  }


export default Navbar;
