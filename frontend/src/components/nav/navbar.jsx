import React from 'react';
import { Link } from 'react-router-dom'
import '../../style/css/navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="Links1">
                <Link id="profile-link" to={'/profile'}>{this.props.currentUser}</Link>
                <button id="logout-button" onClick={this.logoutUser}>Logout</button>
                <button id="create game" onClick={null}>Create Game</button>
            </div>
        );
      } else {
        return (
            <div className="Links2">
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      window.navProps = this.props;
      window.navState = this.state;
      return (
        <div className="nav-bar">
            <h1 id="header-home-court-text">Home Court</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;