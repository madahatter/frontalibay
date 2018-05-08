import React, {Component} from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'

export default class Login extends React.Component{
  render(){
    return(
      <div>
        <form>
          <div>
            <input type="text" placeholder="Username"></input>
          </div>
            <input type="password" placeholder="Password"></input>
          <div>
            <input type="submit"/>
          </div>
          <Route>
            <Link to={"/"}> Link to homepage </Link>
          </Route>
        </form>
      </div>
    )
  }
}