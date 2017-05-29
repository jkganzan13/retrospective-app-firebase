import React, {
  Component,
  PropTypes
} from 'react';
import {
  hideModal,
  hideSnackbar,
  showModal,
  updateReviews,
  updateUsers,
  updateSessionId,
  updateComment,
  updateCurrentUser,
  updateKeyToEdit,
  resetState,
  triggerSnackbar,
  togglePresentationMode,
  toggleDrawer,
  selectReview
} from '../actions/';
import { dbListen } from '../helpers/firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import config from 'config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from '../components/App';
class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config.firebaseCfg);
  }
  render() {
    const {actions, modal, sessionDetails, reviews, app} = this.props;
    return (
      <MuiThemeProvider>
        <Main
          actions={actions}
          modal={modal}
          sessionDetails={sessionDetails}
          reviews={reviews}
          app={app}/>
      </MuiThemeProvider>
    );
  }
}
App.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  app: PropTypes.shape({})
};
function mapStateToProps(state) {
  const props = {
    modal: state.modal,
    sessionDetails: state.sessionDetails,
    reviews: state.reviews,
    app: state.app
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    hideModal,
    hideSnackbar,
    showModal,
    updateReviews,
    updateUsers,
    updateSessionId,
    updateComment,
    updateCurrentUser,
    updateKeyToEdit,
    resetState,
    triggerSnackbar,
    togglePresentationMode,
    toggleDrawer,
    selectReview,
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
