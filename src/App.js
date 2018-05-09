import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Login from './Login';
import Register from './Register'
import Cart from './Cart'
import Seller from './Seller'
import SearchedItems from './SearchedItems'
import './App.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: "",

    }
  }

  setEmail = (email) => {
    this.setState({ email })
  }

  renderHome = routerData => {
    return (<Home email={this.state.email} name={this.state.name}/>)
  }

  renderLogin = routerData => {
    return (<Login setEmail={this.setEmail} />)
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
  renderSearchedItems = () => {
    return (<SearchedItems />)
  }


  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/login' render={this.renderLogin} />
          <Route exact path='/register' render={this.renderRegister} />
          <Route exact path='/cart' render={this.renderCart} />
          <Route exact path='/sellerinfo' render={this.renderSellerInfo} />
          <Route exact path='/searcheditems' render={this.renderSearchedItems} />
        </div>
        </BrowserRouter>
      </div >
    );
  }
}
