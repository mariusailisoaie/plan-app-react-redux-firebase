import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { authStatus } = props;

  const links = authStatus.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">ProjectManager</Link>

        { links }
      </div>
    </nav>
  )
}

const mapPropsToState = state => {
  return {
    authStatus: state.firebase.auth
  }
}

export default connect(mapPropsToState)(Navbar);