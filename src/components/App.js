import React from 'react';
import AppModal from './modal/Modal';
import Wheel from './wheel/Wheel';
import Sidebar from './sidebar/Sidebar';
import './app.css';
import { AppBar, FlatButton, Snackbar } from 'material-ui';
import { appTitle } from '../constants/app';

import injectTapEventPlugin from 'react-tap-event-plugin';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      isSnackbarOpen: false,
      snackbarMessage: ''
    };

    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
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

  render() {

    const { modal, sessionDetails, reviews, actions } = this.props;
    const { isSnackbarOpen, snackbarMessage } = this.state;
    return (
      <div className="index">

        <AppModal {...this.props} openSnackbar={this.openSnackbar} />

        { modal.isLogin ?

          <div className="blackBg"></div>

          :

          <div>
            <AppBar title={appTitle} showMenuIconButton={false} />
            <Wheel actions={actions} />
            <Sidebar sessionDetails={sessionDetails} reviews={reviews} openSnackbar={this.openSnackbar} iconElementRight={<FlatButton label="Logout" />} />
          </div>

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
