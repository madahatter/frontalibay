import React, { Component } from 'react';
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
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    fetch("/test")
    .then(e=> e.text())
    .then(e=>console.log(e))
    return (
      <div>
        <Jumbotron>
         <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
         </Container>
        </Jumbotron>
      </div>
    );
  }
}
