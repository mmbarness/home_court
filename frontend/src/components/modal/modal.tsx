import React, {useState} from "react";
import { closeModal } from "../../actions/modal_actions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import EventForm from "../events/event_form";
import EventShow from "../events/eventShow";

export const Modal = () => {

  const dispatch = useDispatch();
  const modal = useSelector((state: RootStateOrAny) => state.ui.modal)
  console.log('modal:', modal)

  if (!modal) {
    return null;
  }

  const renderComp = () => {
    switch (modal.modal) {
      case "event-show":
        return <EventShow {...modal.data} />;
      case "event-form":
        return <EventForm appLocation={modal.startLocation} />;
      default:
        return null;
    }
  }
  return (
    <div className="modal-background" onClick={() => dispatch(closeModal())}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {renderComp()}
      </div>
    </div>
  );
}
