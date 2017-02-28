import React from 'react';
import Modal from './modal/Modal';
import './app.css';
import LoginModal from './modal/login/LoginModal';
import ReviewModal from './modal/review/ReviewModal';
import ContentContainer from './main/Main';
import { AppOverlay } from './app/index';
import { appTitle, modalTypes, snackbarMsg } from '../constants/app';
import { Snackbar } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      isSnackbarOpen: false,
      snackbarMessage: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openSnackbar = this.openSnackbar.bind(this);
    this.onSessionIdCopy = this.onSessionIdCopy.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSnackbarClose() {
    this.setState({ isSnackbarOpen: false });
  }

  openSnackbar(message) {
    this.setState({
      isSnackbarOpen: true,
      snackbarMessage: message
    });
  }

  closeModal() {
    this.props.actions.toggleModal(false);
  }

  openModal() {
    this.props.actions.toggleModal(true);
  }

  onSessionIdCopy () {
    this.openSnackbar(snackbarMsg.SESSION_ID_COPIED);
  };

  logout() {
    this.props.actions.resetState();
  }

  render() {

    const { isSnackbarOpen, snackbarMessage } = this.state;
    const { actions, modal, sessionDetails } = this.props;

    return (
      <div className="index">

        <Modal isModalOpen={modal.isModalOpen} title={appTitle}>
          {
            modal.modalType === modalTypes.LOGIN ?
            <LoginModal actions={actions} /> :
            <ReviewModal
              actions={actions}
              modal={modal}
              closeModal={this.closeModal}
              sessionDetails={sessionDetails}
              openSnackbar={this.openSnackbar}
            />
          }
        </Modal>

        {
          modal.modalType === modalTypes.LOGIN ?
          <AppOverlay /> :
          <ContentContainer {...this.props} openSnackbar={this.openSnackbar} />
        }

        <Snackbar
          open={isSnackbarOpen}
          message={snackbarMessage}
          autoHideDuration={5000}
          onRequestClose={this.handleSnackbarClose}
          className={'snackbar'}
        />

      </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
