import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Getkey() {

  return (
        <div className = 'get-key'>
        
        <p>Need a key to enter your inventory? Email us at TPFrenzy@gmail.com</p>
        <ul className="call-out-link">
        <Link to = '/merchants'>
                <li>Back to Merchants</li>
            </Link>
    
        </ul>
        </div>

  );
}

export default Getkey;