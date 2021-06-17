import React from "react";
// const splashPic  = require('/Users/matthewbarnes/Documents/programming/aA/home_court/local-assets/images/nyt-pickup-bbal-1.jpeg')
import "../style/css/splash_page.css";

export const SplashPage = () => {
  return (
    <div className="splash-page">
      <img
        id="splash-image"
        src="https://home-court.s3.amazonaws.com/images/nyt-pickup-bbal-1.jpeg"
        alt=""
      />
      <div className="splash-text">test</div>
    </div>
  );
};

export default SplashPage;
