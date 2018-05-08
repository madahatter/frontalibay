import React, {Component} from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'

export default class Register extends React.Component{
  render(){
    return(
      <div>
        <div>
          <input placeholder="Email" type="email"></input>
        </div>
        <div>
          <input placeholder="Name" type="text"></input>
        </div>
        <div>
          <input placeholder="Password" type="password"></input>
        </div>
        <div>
          <input type="submit"/>
        </div>
        <Route>
          <Link to={"/"}> Link to homepage </Link>
        </Route>
      </div>
    )
  }
}