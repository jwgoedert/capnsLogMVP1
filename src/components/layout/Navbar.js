import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  console.log('propsauth', props);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
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
const mapStateToProps = (state) => {
  console.log('navstate', state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }

}
export default connect(mapStateToProps)(Navbar);