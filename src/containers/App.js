/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {
  toggleModal,
  updateReviews,
  updateUsers,
  updateRoomId,
  updateModalContent,
  selectReviewType,
  updateCurrentUser
} from '../actions/';
import { dbListen } from '../helpers/firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import config from 'config';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config.firebaseCfg);
  }
  render() {
    const {actions, modal, roomDetails, reviews} = this.props;
    return (
      <Main
        actions={actions}
        modal={modal}
        roomDetails={roomDetails}
        reviews={reviews}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  roomDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    modal: state.modal,
    roomDetails: state.roomDetails,
    reviews: state.reviews
  };

  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    toggleModal,
    updateReviews,
    updateUsers,
    updateRoomId,
    updateModalContent,
    selectReviewType,
    updateCurrentUser
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
