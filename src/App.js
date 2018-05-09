import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Link, withRouter } from 'react-router-dom'
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
import './App.css';


class App extends React.Component {
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
    return (<Cart />)
  }

  renderSellerInfo = () => {
    return (<Seller />)
  }

  renderSearchedItems = () => {
    return (<SearchedItems searchResults={this.state.searchResults} />)
  }

  renderNavbar = () => {
    return <Navbar email={this.state.email} name={this.state.name} search={this.search}/>;
  }

  renderCategories = (routerData) => {
    return <Categories search={this.search} routerData={routerData}/>
  }

  setSearchResults = (results) => {
    this.setState({ searchResults: results });
  }
  search = (searchTerm) => {
    search(searchTerm)
    .then(res => {
        console.log(res);
        this.setSearchResults(res);
        if(this.props.location.pathname !== '/searcheditems') this.props.history.push('/searcheditems');
    });
  }
  renderItemDetails = () => {
    return (<ItemDetails />)
  }


  render() {
    return (
      <div>
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
                <Route exact path='/itemdetails' render={this.renderItemDetails} />
              </Col>
            </Row>
          </Container>
      </div >
    );
  }
}

export default withRouter(App);