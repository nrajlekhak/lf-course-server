import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <Link to={this.props.auth ? '/surveys' : '/'}>Surveys</Link>
            </li>
            <li>
              <Link to="/surveys/new">Create New Surveys</Link>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Eamily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
