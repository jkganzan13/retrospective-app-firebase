import React from 'react';
import AppModal from './modal/Modal';
import Wheel from './wheel/Wheel';
import Sidebar from './sidebar/Sidebar';
import './app.css';
import { Grid, Row } from 'react-bootstrap';
import { Snackbar } from 'material-ui';
import { snackbarMsg } from '../constants/customMessages';

import injectTapEventPlugin from 'react-tap-event-plugin';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      isSnackbarOpen: false
    };

    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.openSnackbar = this.openSnackbar.bind(this);
  }

  handleSnackbarClose() {
    this.setState({ isSnackbarOpen: false });
  }

  openSnackbar() {
    this.setState({ isSnackbarOpen: true });
  }

  render() {

    const { modal, roomDetails, reviews, actions } = this.props;

    return (
      <Row className="index">
        <AppModal {...this.props} openSnackbar={this.openSnackbar} />
        { modal.modalContent === 'login' && <div className="blackBg"></div> }
        { modal.modalContent !== 'login' && <Wheel actions={actions} /> }
        { modal.modalContent !== 'login' && <Sidebar roomDetails={roomDetails} reviews={reviews} /> }
        <Snackbar
          open={this.state.isSnackbarOpen}
          message={snackbarMsg.REVIEW_SUBMIT_ON_SUCCESS}
          autoHideDuration={5000}
          onRequestClose={this.handleSnackbarClose}
        />
      </Row>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
