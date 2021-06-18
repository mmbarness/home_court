import React from "react";
import { IoRefreshCircle } from "react-icons/io5";
import { RiMickeyFill } from "react-icons/ri";

function ResetMapButton(props) {
  return (
    <span
      className="map-button-container"
      onClick={() => props.panTo(props.center)}
    >
      <button className="map-button reset-map">
        {props.text === "Orlando" ? (
          <RiMickeyFill size={30} />
        ) : (
          <IoRefreshCircle size={30} />
        )}
      </button>
      <div className="map-button-text">{props.text}</div>
    </span>
    // return (
    //     <button
    //         onClick={ () => (props.panTo(props.center)) }
    //     >
    //         {props.text}
    //     </button>
    // );
  );
}

export default ResetMapButton;
