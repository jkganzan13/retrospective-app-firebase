import React, { PropTypes } from 'react';
import Modal from './modal/Modal';
import './app.css';
import ContentContainer from './main/Main';
import PresentationMode from './presentation/PresentationMode';
import { AppOverlay } from './app/index';
import { modalTypes, snackbarMsg } from '../constants';
import { Snackbar } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.onSessionIdCopy = this.onSessionIdCopy.bind(this);
    this.logout = this.logout.bind(this);
  }

  onSessionIdCopy () {
    this.openSnackbar(snackbarMsg.SESSION_ID_COPIED);
  }

  logout() {
    this.props.actions.resetState();
  }

  renderView() {
    const { app, modal } = this.props;

    if (modal.modalType === modalTypes.LOGIN) {
      return <AppOverlay />
    }

    if (app.presentationMode) {
      return <PresentationMode {...this.props} />;
    }

    return <ContentContainer {...this.props} openSnackbar={this.openSnackbar} />;
  }

  render() {

    const { actions, modal, sessionDetails, app } = this.props;

    return (
      <div className="index">

        <Modal
          actions={actions}
          modal={modal}
          sessionDetails={sessionDetails}
        />

        <Snackbar
          open={app.isSnackbarOpen}
          message={app.snackbarMessage}
          autoHideDuration={5000}
          onRequestClose={actions.hideSnackbar}
          className='snackbar'
        />

        { this.renderView() }

      </div>

    );
  }
}

AppComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired
};

export default AppComponent;
