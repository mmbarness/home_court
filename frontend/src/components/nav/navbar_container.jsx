import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/ui_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
  let user; 
  (state.session.isAuthenticated) ? (user = state.session.user.username) : (user = null)
  return({
  loggedIn: state.session.isAuthenticated,
  currentUser: user
  })
};

const mDTP = dispatch => {
  return({
    logout: () => dispatch(logout()),
    openModal: (modalName) => dispatch(openModal(modalName))
  })
}


export default connect(mapStateToProps,mDTP)(NavBar);