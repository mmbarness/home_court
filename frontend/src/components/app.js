import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import { Route, Redirect, withRouter } from 'react-router-dom';

import MainPageContainer from "../components/main/main_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import Modal from "../components/modal/modal.jsx";

import "../style/css/application.css";
import { NavBarHook } from "./nav/navbar_hook";
import "../style/css/modal.css";
import SplashPage from "./splash";
import Team from "./nav/team";

const App = () => (
  <div className="top">
    <Modal />
    <div className="content">
      <NavBarHook />
      <Switch>
        <ProtectedRoute exact path="/" component={MainPageContainer} />             
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <Route exact path="/splash" component={SplashPage} />  
        <Route exact path="/team" component={Team} />  
      </Switch>
    </div>
  </div>
);

export default App;
