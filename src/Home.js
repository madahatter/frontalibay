import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Login';
import { Register } from './Register';
import './App.css';
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Collapse
} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>Hot deal of the day</h1>
        <div>
        <img src="https://picsum.photos/700/400" />
        </div>
      </div>
    );
  }
}