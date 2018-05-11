import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Link, withRouter } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { search, addToCart } from './requests.js';
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
import Checkout from './Checkout';
import './App.css';
import CreateListing from './CreateListing.js'


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
    .then(res => {console.log(res); this.setState({cartItems: res.cartItems}) });

  }
  setEmail = (email, name) => {
    this.setState({ email, name })
  }

  addCartItem = (itemID) => {
    addToCart(itemID, this.state.email)
    .then(res => 
      {
        return this.setState({cartItems: this.state.cartItems.concat(res.itemID)})
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
    return (<Cart cartItems={this.state.cartItems} email={this.state.email} />)
  }

  renderSellerInfo = (routerData) => {
    let sellerId = routerData.match.params.userID;
    return (<SellerInfo sellerId={sellerId} addCartItem={this.addCartItem}/>)
  }

  renderSearchedItems = () => {
    return (<SearchedItems searchResults={this.state.searchResults} addCartItem={this.addCartItem}/>)
  }

  renderNavbar = () => {
    return <Navbar email={this.state.email} name={this.state.name} search={this.search} cartItems={this.state.cartItems.length}/>;
  }

  renderCategories = (routerData) => {
    return <Categories search={this.search} routerData={routerData}/>
  }

  setSearchResults = (results) => {
    this.setState({ searchResults: results });
  }
  search = (searchTerm, opts) => {
    search(searchTerm, opts)
    .then(res => {
        this.setSearchResults(res);
        if(this.props.location.pathname !== '/searcheditems') this.props.history.push('/searcheditems');
    });
  }
  renderItemDetails = (routerData) => {
    let itemID = routerData.match.params.itemID
    return (<ItemDetails itemID={itemID} addCartItem={this.addCartItem}/>)
  }

  renderConfirmationPage = () => {
    return(<Confirmation/>)
  }

  renderCheckout = (routerData) => {
    return(<Checkout/>)
  }

  renderCreateListing = (routerData) => {
    return this.state.email ? <CreateListing historyPush = {routerData.history.push} email={this.state.email}/> : <Redirect to="/login"/>;
  }

  render() {
    return (
      <div>
          <Container fluid>
            <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderNavbar} />
            <Row>
              <Col xs={12} md={4}>
                <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderCategories} />
              </Col>
              <Col xs={12} md={8}>
                <Route exact path='/login' render={this.renderLogin} />
                <Route exact path='/register' render={this.renderRegister} />
                <Route exact path='/' render={this.renderHome} />
                <Route exact path='/cart' render={this.renderCart} />
                <Route exact path='/sellerinfo/:sellerId' render={this.renderSellerInfo} />
                <Route exact path='/searcheditems' render={this.renderSearchedItems} />
                {/* <Route exact path='/itemdetails/:id' render={this.renderItemDetails} /> */}
                <Route exact path='/confirmation' render={this.renderConfirmationPage}/>
                <Route exact path='/cart/checkout' render={this.renderCheckout}/>
                <Route exact path='/itemdetails/:itemID' render={this.renderItemDetails} />
                <Route exact path='/createlisting' render={this.renderCreateListing} />
              </Col>
            </Row>
          </Container>
      </div >
    );
  }
}

export default withRouter(App);