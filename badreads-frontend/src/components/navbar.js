import React from 'react';
import './nav.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './login';
import Dashboard from './dashboard'

const NavBar = () => {
    return(
        <BrowserRouter>
        <header>
    <nav>
      <div className="logo">
        <a href="/">
          <img src="/images/logo.png" alt="" id="small-logo"/>
          <img src="images/badreads.png" alt="" id="large-logo"/>
        </a>
        <h4>A Community<br/>For Book Haters</h4>
      </div>
      <ul className="main-nav">
        <li><a href="/login">Login</a></li>
        
        <li>My Account
          <ul className="drop">
            <div className="menu-arrow"></div>
            
            <li><a href="#">Sign Out</a></li>
          </ul>
        </li>

        <div className="search-bar">
          <input type="text" name="" placeholder="Search Books" />
          <button type="button" name="button" id="search"></button>
        </div>

      </ul>
      

      <button type="button" name="button" className="hamburger">&#9776;</button>

    </nav>
  </header>
<div>
  <Switch>
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
  </BrowserRouter>
    );
    };

export default NavBar;