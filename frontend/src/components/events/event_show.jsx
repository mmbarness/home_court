import React from "react";
import { MdClose } from "react-icons/md";

class EventShow extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.closeModal} className="close-x">
          <MdClose size={28} />
        </div>
        modal open
      </div>
    );
  }
}

export default EventShow;
