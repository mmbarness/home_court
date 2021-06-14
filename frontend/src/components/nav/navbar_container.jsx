import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: {username: 'placeholder_username', email: 'placeholder_email'}
    // state.session.user
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);