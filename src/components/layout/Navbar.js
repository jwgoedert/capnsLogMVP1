import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper yellow darken-2">
      <div className="container">
        <Link to='/' className="brand-logo left">
          Cap'n's Log
        </Link>
        <SignedOutLinks/>
        <SignedInLinks/>
      </div>            
    </nav>
  ) 
}

export default Navbar;