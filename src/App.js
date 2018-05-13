import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Link, withRouter } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { search, addToCart, removeFromCart } from './requests.js';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import SellerInfo from './SellerInfo';
import SearchedItems from './SearchedItems';
import Navbar from './Navbar.js';
import Categories from './Categories.js';
import ItemDetails from './ItemDetails';
import Confirmation from './Confirmation';
import './App.css';
import CreateListing from './CreateListing.js'
import Buyer from './Buyer'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: "",
      searchResults: [],
      cartItems: []
    }
  }

  componentDidMount = () => {
    fetch('/session', {
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ email: res.email, name: res.name, cartItems: res.cartItems });
      });

  }
  setEmail = (email, name) => {
    this.setState({ email, name })
  }

  addCartItem = (itemID) => {
    addToCart(itemID)
      .then(res => {
        return this.setState({
          cartItems: this.state.cartItems.concat(res.itemID)
        })
      })
  }

  removeCartItem = (itemID) => {
    removeFromCart(itemID)
      .then(res => {
        return this.setState({
          cartItems: this.state.cartItems.filter((cartItem) => cartItem !== itemID)
        })
      })
  }

  clearCartItems = () => {
    this.setState({
      cartItems: []
    })
  }

  renderHome = () => {
    return (<Home email={this.state.email} name={this.state.name} setSearchResults={this.setSearchResults} />)
  }

  renderLogin = routerData => {
    return (<Login setEmail={this.setEmail} name={this.state.name} />)
  }

  renderRegister = () => {
    return (<Register />)
  }

  renderCart = () => {
    return (<Cart cartItems={this.state.cartItems} email={this.state.email} clearCartItems={this.clearCartItems}/>)
  }

  renderSellerInfo = (routerData) => {
    let sellerID = routerData.match.params.sellerID;
    return (<SellerInfo sellerID={sellerID} addCartItem={this.addCartItem} />)
  }

  renderSearchedItems = () => {
    return (<SearchedItems searchResults={this.state.searchResults} addCartItem={this.addCartItem} />)
  }

  renderNavbar = () => {
    return <Navbar email={this.state.email} name={this.state.name} search={this.search} cartItems={this.state.cartItems.length} />;
  }

  renderCategories = (routerData) => {
    return <Categories search={this.search} routerData={routerData} />
  }

  setSearchResults = (results) => {
    this.setState({ searchResults: results });
  }
  search = (searchTerm, opts) => {
    search(searchTerm, opts)
      .then(res => {
        this.setSearchResults(res);
        if (this.props.location.pathname !== '/searcheditems') this.props.history.push('/searcheditems');
      });
  }
  renderItemDetails = (routerData) => {
    let itemID = routerData.match.params.itemID
    return (<ItemDetails itemID={itemID} addCartItem={this.addCartItem} />)
  }

  renderConfirmationPage = () => {
    return (<Confirmation />)
  }

  renderCreateListing = (routerData) => {
    return this.state.email ? <CreateListing historyPush={routerData.history.push} email={this.state.email} /> : <Redirect to="/login" />;
  }

  renderBuyerPurchaseHistory = (routerData) => {
    let buyerID = routerData.match.params.buyerID
    return(<Buyer email={this.state.email} buyerID={buyerID}/> )
  }

  render() {
    return (
      <div>
          <div>
            <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderNavbar} />
            <div style={{display:"flex"}}>
              <div className="categoriesDiv">
                <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderCategories} />
              </div>
              <div className="mainContent">
                <Route exact path='/' render={this.renderHome} />
                <Route exact path='/itemsbySeller/:sellerID' render={this.renderSellerInfo} />
                <Route exact path='/confirmation' render={this.renderConfirmationPage}/>
                <Route exact path='/itemdetails/:itemID' render={this.renderItemDetails} />
                <Route exact path='/createlisting' render={this.renderCreateListing} />
                <Route exact path='/allItemBuyer/:buyerID' render={this.renderBuyerPurchaseHistory}/>
              </div>
              <div className="cartBody">
              <Route exact path='/searcheditems' render={this.renderSearchedItems} />
              <Route exact path='/cart' render={this.renderCart} />
              <Route exact path='/cart/checkout' render={this.renderCheckout}/>
              </div>
              <div className="loginregisterpage">
                <Route exact path='/login' render={this.renderLogin} />
                <Route exact path='/register' render={this.renderRegister} />
              </div>
            </div>
          </div>
      </div >
    );
  }
}

export default withRouter(App);