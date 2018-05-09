import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { search } from './requests.js';

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchInput: "",
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        search(this.state.searchInput)
        .then(res => {
            console.log(res);
            this.props.setSearchResults(res);
            if(this.props.routerData.location.pathname !== '/searcheditems') this.props.routerData.history.push('/searcheditems');
        });

    }
    handleChange = (event) => {
        this.setState({ searchInput: event.target.value });
    }
    render() {
        return (
            <div>
                <ul>
                    <li className="navbar">
                        Alibay
                    </li>
                    <li className="navbar">
                        <form className="inline" onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.searchInput} onChange={this.handleChange}></input>
                            <input type="submit" />
                        </form>
                    </li>

                    {this.props.email !== '' && <li>{this.props.email}</li>}
                    {this.props.name !== '' && <li>{this.props.name}</li>}
                    <li className="navbar">
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