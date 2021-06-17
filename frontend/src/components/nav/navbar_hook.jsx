import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import '../../style/css/navbar.scss'

export const NavBarHook = () => {
  let loggedIn = useSelector((state) => state.session.isAuthenticated);
  let currentUser = useSelector((state) => state.session.user);

    let loggedIn = useSelector(state => state.session.isAuthenticated)
    let currentUser = useSelector(state => state.session.user)
    
    const dispatch = useDispatch();
    const logoutUser = (e) => {
      e.preventDefault();
      (dispatch(logout()))
    }

    const loggedInLinks = () => {
        return (
            <div className="Links1 limit-min-max">
                <Link id="profile-link" to={'/profile'}>{currentUser.username}</Link>
                <button id="logout-button" onClick={logoutUser}>Logout</button>
                <button id="create game" onClick={null}>Create Game</button>
            </div>
        );
    }
    const notLoggedInLinks = () => {
        return (
            <div className="Links2 limit-min-max">
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
    }

  const loggedInLinks = () => {
    return (
      <div className="Links1">
        <Link id="profile-link" to={"/profile"}>
          {currentUser.username}
        </Link>
        <button id="logout-button" onClick={logoutUser}>
          Logout
        </button>
        <button id="create game" onClick={null}>
          Create Game
        </button>
      </div>
    );
  };
  const notLoggedInLinks = () => {
    return (
      <div className="Links2">
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    );
  };

  return (
    <div className="nav-bar">
      <h1 id="header-home-court-text">
        <Link to={"/"}>
          <img
            src={require("../images/logowhitebg.png")}
            alt="logo"
            className="logo"
          />
        </Link>
      </h1>
      {loggedIn ? loggedInLinks() : notLoggedInLinks()}
    </div>
  );
};
