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
    dispatch(logout());
  };

  const loggedInLinks = () => {
    return (
      <div className="Links1 limit-min-max">
        <Link id="profile-link" to={"/profile"}>
          Welcome {currentUser.username}!
        </Link>
        <Link to={"/team"} id="profile-link">
          About the Team
        </Link>
        <a href="#" id="profile-link" onClick={logoutUser}>
          Logout
        </a>
      </div>
    );
  };
  const notLoggedInLinks = () => {
    return (
      <div className="Links2 limit-min-max">
        <Link to={"/team"} className="limit-min-max">
          About the Team
        </Link>
        <Link to={"/signup"} className="limit-min-max">
          Signup
        </Link>
        <Link to={"/login"} className="limit-min-max">
          Login
        </Link>
      </div>
    );
  };

  return (
    <div className="nav-bar">
      <h1 id="header-home-court-text" className="limit-min-max">
        <Link to={"/"}>
          <img
            id="logo"
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/homecourtlogo3.png"
            alt="Home Court"
            height="65px"
          />
        </Link>
      </h1>
      {loggedIn ? loggedInLinks() : notLoggedInLinks()}
    </div>
  );
};
