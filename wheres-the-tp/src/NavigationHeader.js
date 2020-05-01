import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './img/tp.png'
import { Navbar, Nav } from 'react-bootstrap';




function NavigationHeader() {

  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
  <img className="logo fix-bg" src={logo}></img>
  <Navbar.Toggle className = "fix-bg" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className = "fix-bg" id="responsive-navbar-nav">
    <Nav className="mr-auto fix-bg">
      <Nav.Link className = "white-link" href='/tp-locator'>TPLocator</Nav.Link>
      <Nav.Link className = "white-link" href='/merchants'>Merchants</Nav.Link>
      <Nav.Link className = "white-link" href='/about'>About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationHeader;
/*
<li className="nav-item active">
                    <Link className="nav-link" to = '/tp-locator'>
                        <li>TPLocator</li>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to = '/merchants'>
                        <li>Merchants</li>
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to = '/about'>
                        <li>About</li>
                    </Link>
                </li>*/