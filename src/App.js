import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Login from './Login';
import Register from './Register'
import Cart from './Cart'
import Seller from './Seller'
import SearchedItems from './SearchedItems'
import './App.css';

// Render Home Page
let renderHome = routerData => {
  return (<Home />)
}

// Render Login Page
let renderLogin = routerData => {
  return (<Login />)
}

// Render Register Page
let renderRegister = routerData => {
  return (<Register />)
}

// Render Cart
let renderCart = routerData => {
  return(<Cart />)
}

// Render Seller info's page
let renderSellerInfo = routerData => {
  return(<Seller/>)
} 

// Render SearchedItems' list page
let renderSearchedItems = routerData => {
  return(<SearchedItems/>)
}

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Route exact path='/' render={renderHome} />
          <Route exact path='/login' render={renderLogin} />
          <Route exact path='/register' render={renderRegister} />
          <Route exact path='/cart' render={renderCart} />
          <Route exact path='/sellerinfo' render={renderSellerInfo} />
          <Route exact path='/searcheditems' render={renderSearchedItems} />
        </div>
        </BrowserRouter>
      </div >
    );
  }
}
