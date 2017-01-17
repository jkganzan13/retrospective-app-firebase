import React from 'react';
import AppModal from './modal/Modal';
import './app.css';
import Main from './main/Main'
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

    const { isSnackbarOpen, snackbarMessage } = this.state;

    return (
      <div className="index">

        <AppModal {...this.props} openSnackbar={this.openSnackbar} />

        { this.props.modal.isLogin ? <div className="blackBg"></div> : <Main {...this.props} openSnackbar={this.openSnackbar} /> }

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
