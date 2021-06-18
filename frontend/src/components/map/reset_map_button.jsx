import React from "react";
import { IoRefreshCircle } from "react-icons/io5";

function ResetMapButton(props) {
  return (
    <span className="map-button-container">
      <button
        className="map-button reset-map"
        onClick={() => props.panTo(props.center)}
      >
        <IoRefreshCircle size={30} />
      </button>
      <div className="map-button-text">Reset position</div>
    </span>
  );
}

export default ResetMapButton;
