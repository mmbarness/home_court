import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <section className="main-page-events"> event cards go here </section>
        <section className="main-page-map"> google map goes here</section>
      </div>
    );
  }
}

export default MainPage;
