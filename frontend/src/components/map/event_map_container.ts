
import { connect, RootStateOrAny } from "react-redux";
import EventMap from "./event_map";
import { openModal, closeModal } from "../../actions/modal_actions";
import { receiveMapBounds } from "../../actions/map_actions";

const mSTP = (state: RootStateOrAny) => ({
  events: state.events,
  currentUser: state.session.user,
});

const mDTP = (dispatch: any) => ({
  openModal: (modal:any ) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  receiveMapBounds: (mapBounds:any) => dispatch(receiveMapBounds(mapBounds)),
});

export default connect(mSTP, mDTP)(EventMap);