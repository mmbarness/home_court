import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
  let user; 
  (state.session.isAuthenticated) ? (user = state.session.user.username) : (user = null)
  return({
  loggedIn: state.session.isAuthenticated,
  currentUser: user
  })
};

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);