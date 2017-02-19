import React from 'react';
import Modal from './modal/Modal';
import './app.css';
import Main from './main/Main';
import LoginModal from './modal/login/LoginModal';
import { appTitle } from '../constants/app';
import { Snackbar } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      isSnackbarOpen: false,
      snackbarMessage: '',
      isModalOpen: true
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openSnackbar = this.openSnackbar.bind(this);
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

  toggleModal(isOpen) {
    this.setState({
      isModalOpen: isOpen
    });
  }

  closeModal() {
    this.toggleModal(false);
  }

  openModal() {
    this.toggleModal(true);
  }

  render() {

    const { isModalOpen, isSnackbarOpen, snackbarMessage } = this.state;

    return (
      <div className="index">

        <Modal
          children={<LoginModal actions={this.props.actions} closeModal={this.closeModal} />}
          isModalOpen={isModalOpen}
          title={appTitle}
        />

        { isModalOpen ? <div className="blackBg"></div> : <Main {...this.props} openSnackbar={this.openSnackbar} openModal={this.openModal} /> }

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
