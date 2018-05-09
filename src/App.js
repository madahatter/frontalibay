import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Link } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Login from './Login';
import Register from './Register'
import Cart from './Cart'
import Seller from './Seller'
import SearchedItems from './SearchedItems'
import Navbar from './Navbar.js'
import './App.css';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: "",
      searchResults: []
    }
  }

  setEmail = (email, name) => {
    this.setState({ email, name })
  }

  renderHome = routerData => {
    return (<Home email={this.state.email} name={this.state.name} setSearchResults={this.setSearchResults}/>)
  }

  renderLogin = routerData => {
    return (<Login setEmail={this.setEmail} name={this.state.name} />)
  }

  renderRegister = routerData => {
    return (<Register />)
  }

  renderCart = () => {
    return (<Cart />)
  }

  renderSellerInfo = () => {
    return (<Seller />)
  }
  renderSearchedItems = (routerData) => {
    return (<SearchedItems searchResults={this.state.searchResults} />)
  }
  renderNavbar = (routerData) => {
    return <Navbar email={this.state.email} name={this.state.name} setSearchResults={this.setSearchResults} routerData={routerData} />;
  }
  setSearchResults= (results) => {
    this.setState({searchResults: results});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
            <div name="header">
            </div>
            <div name="body">
              <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderNavbar} />
              <Route exact path='/' render={this.renderHome} />
              <Route exact path='/login' render={this.renderLogin} />
              <Route exact path='/register' render={this.renderRegister} />
              <Route exact path='/cart' render={this.renderCart} />
              <Route exact path='/sellerinfo' render={this.renderSellerInfo} />
              <Route exact path='/searcheditems' render={this.renderSearchedItems} />
            </div>
          </div>
        </BrowserRouter>
      </div >
    );
  }
}
