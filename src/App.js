import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Link } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { search } from './requests.js';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import Seller from './Seller';
import SearchedItems from './SearchedItems';
import Navbar from './Navbar.js';
import Categories from './Categories.js';
import ItemDetails from './ItemDetails';
import Confirmation from './Confirmation';
import Checkout from './Checkout';
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
    return (<Home email={this.state.email} name={this.state.name} setSearchResults={this.setSearchResults} />)
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
    return <Navbar email={this.state.email} name={this.state.name} search={this.search}/>;
  }

  renderCategories = (routerData) => {
    return <Categories search={this.search} routerData={routerData}/>
  }

  setSearchResults = (results) => {
    this.setState({ searchResults: results });
  }
  search = (searchTerm, routerData) => {
    search(searchTerm)
    .then(res => {
        console.log(res);
        this.setSearchResults(res);
        if(routerData.location.pathname !== '/searcheditems') routerData.history.push('/searcheditems');
    });
  }
  renderItemDetails = (routerData) => {
    return (<ItemDetails id={routerData.match.params.id}/>)
  }

  renderConfirmationPage = () => {
    return(<Confirmation/>)
  }

  renderCheckout = () => {
    return(<Checkout/>)
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Container>
            <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderNavbar} />
            <Row>
              <Col xs={6} md={2}>
                <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderCategories} />
              </Col>
              <Col xs={12} md={10}>
                <Route exact path='/' render={this.renderHome} />
                <Route exact path='/login' render={this.renderLogin} />
                <Route exact path='/register' render={this.renderRegister} />
                <Route exact path='/cart' render={this.renderCart} />
                <Route exact path='/sellerinfo' render={this.renderSellerInfo} />
                <Route exact path='/searcheditems' render={this.renderSearchedItems} />
                <Route exact path='/itemdetails/:id' render={this.renderItemDetails} />
                <Route exact path='/confirmation' render={this.renderConfirmationPage}/>
                <Route exact path='/cart/checkout' render={this.renderCheckout}/>
              </Col>
            </Row>
          </Container>
        </BrowserRouter>
      </div >
    );
  }
}
