import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Jumbotron,
  Button,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={} />
        </div>
      </BrowserRouter>
    );
  }
  handleSubmit = (event) => {
    requests.login(this.state.usernameInput, this.state.passworInput)
      .then((e) => this.setState({ sessionId: e }))
  }

}
