import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle= {
        color:'white'
    };

  return (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className="navLinks">
                <Link to="/about">
                <li style={navStyle}>About</li>
                </Link>
                <Link to="/shop">
                <li style={navStyle}>Shop</li>
                </Link>
                <Link to="/banners">
                <li style={navStyle}>Fortnite Banners</li>
                </Link>
            </ul>
        </nav>

    </div>
  
    );
}

export default Nav;
