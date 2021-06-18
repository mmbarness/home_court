import React from "react";
// const splashPic  = require('/Users/matthewbarnes/Documents/programming/aA/home_court/local-assets/images/nyt-pickup-bbal-1.jpeg')
import "../style/css/splash_page.css";
import LoginContainer from './session/login_form_container';

export const SplashPage = () => {
  return (
    <div className="splash-page">
      <br />
      <div className="splash-text">Connect with friends and people around your neighborhood</div>
      
      <div className='splash-login'><LoginContainer /></div>
    </div>
  );
};

export default SplashPage;
