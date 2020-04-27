import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
        <Link style={navStyle} to = '/tp-locator'>
                <li>TPLocator</li>
            </Link>
            
            <Link style={navStyle} to = '/merchants'>
                <li>Merchants</li>
            </Link>

            <Link style={navStyle} to = '/about'>
                <li>About</li>
            </Link>
    
        </ul>
    </nav>
  );
}

export default Nav;