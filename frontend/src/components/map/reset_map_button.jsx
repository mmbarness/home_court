import React from "react";
import { IoRefreshCircle } from "react-icons/io5";
import { RiMickeyFill } from "react-icons/ri";
import { GiBullHorns, GiBootStomp } from "react-icons/gi";

function ResetMapButton(props) {
  switch (props.text) {
    case "Orlando":
      return (
        <span
          className="map-button-container"
          onClick={() => props.panTo(props.center)}
        >
          <button className="map-button reset-map">
            <RiMickeyFill size={25} />
          </button>
          <div className="map-button-text">{props.text}</div>
        </span>
      );
    case "Houston":
      return (
        <span
          className="map-button-container"
          onClick={() => props.panTo(props.center)}
        >
          <button className="map-button reset-map">
            <GiBullHorns size={25} />
          </button>
          <div className="map-button-text">{props.text}</div>
        </span>
      );
    case "New York":
      return (
        <span
          className="map-button-container"
          onClick={() => props.panTo(props.center)}
        >
          <button className="map-button reset-map">
            <GiBootStomp size={25} />
          </button>
          <div className="map-button-text">{props.text}</div>
        </span>
      );

    default:
      return (
        <span
          className="map-button-container"
          onClick={() => props.panTo(props.center)}
        >
          <button className="map-button reset-map">
            <IoRefreshCircle size={25} />
          </button>
          <div className="map-button-text">{props.text}</div>
        </span>
      );
  }
}

// function ResetMapButton(props) {
//   return (
//     <span
//       className="map-button-container"
//       onClick={() => props.panTo(props.center)}
//     >
//       <button className="map-button reset-map">
//         {props.text === "Orlando" ? (
//           <RiMickeyFill size={25} />
//         ) : (
//           <IoRefreshCircle size={25} />
//         )}
//       </button>
//       <div className="map-button-text">{props.text}</div>
//     </span>
//     // return (
//     //     <button
//     //         onClick={ () => (props.panTo(props.center)) }
//     //     >
//     //         {props.text}
//     //     </button>
//     // );
//   );
// }

export default ResetMapButton;
