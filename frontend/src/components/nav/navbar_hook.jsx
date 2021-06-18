import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import "../../style/css/navbar.scss";

export const NavBarHook = () => {
  let loggedIn = useSelector((state) => state.session.isAuthenticated);
  let currentUser = useSelector((state) => state.session.user);
 
    const dispatch = useDispatch();
    const logoutUser = (e) => {
      e.preventDefault();
      (dispatch(logout()))
    }

    const loggedInLinks = () => {
        return (
            <div className="Links1 limit-min-max">
                <Link id="profile-link" to={'/profile'}>{currentUser.username}</Link>
                <Link to={'/team'}>About the Team</Link>
                <button id="logout-button" onClick={logoutUser}>Logout</button>
            </div>
        );
    }
    const notLoggedInLinks = () => {
        return (
            <div className="Links2 limit-min-max">
                <Link to={'/team'} className="limit-min-max">About the Team</Link>
                <Link to={'/signup'} className="limit-min-max">Signup</Link>
                <Link to={'/login'} className="limit-min-max">Login</Link>
            </div>
        );
    }

  return (
    <div className="nav-bar">
      <h1 id="header-home-court-text" className="limit-min-max">
        <Link to={"/"}>
          {/* <img
            src={require("../images/logowhitebg.png")}
            alt="logo"
            className="logo"
          /> */}
          Home Court
        </Link>
      </h1>
      {loggedIn ? loggedInLinks() : notLoggedInLinks()}
    </div>
  );
};
