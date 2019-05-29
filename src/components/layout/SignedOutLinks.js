import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>New Entry</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>JG</NavLink></li>
    </ul>
  ) 
}

export default SignedOutLinks;