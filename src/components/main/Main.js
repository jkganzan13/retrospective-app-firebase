import React from 'react';
import Wheel from '../wheel/Wheel';
import Sidebar from '../sidebar/Sidebar';
import AppBarButtons from './AppBarButtons';
import AppBarMenu from './AppBarMenu';
import { AppBar } from 'material-ui';
import { appTitle } from '../../constants/app';
import { snackbarMsg } from '../../constants/app';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.onSessionIdCopy = this.onSessionIdCopy.bind(this);
  }

  logout() {
    const { toggleModal, updateIsLogin } = this.props.actions;
    updateIsLogin(true);
    toggleModal();
  }

  onSessionIdCopy () {
    this.props.openSnackbar(snackbarMsg.SESSION_ID_COPIED);
  };

  render() {
    const { sessionDetails, reviews, actions } = this.props;
    return (
      <div className="main-content">
        <AppBar
          title={appTitle}
          iconElementLeft={
            <AppBarMenu
              actions={actions}
              sessionDetails={sessionDetails}
              onSessionIdCopy={this.onSessionIdCopy}
              logout={this.logout}
            />
          }
          iconStyleRight={{marginTop: 0}}
          iconElementRight={
            <AppBarButtons
              actions={actions}
              sessionDetails={sessionDetails}
              onSessionIdCopy={this.onSessionIdCopy}
              logout={this.logout}
            />
          }
        />
        <div className="content-container">
          <Wheel actions={actions} />
          <Sidebar sessionDetails={sessionDetails} reviews={reviews} actions={actions} />
        </div>
      </div>

    );
  }
}

Main.displayName = 'MainMain';
Main.propTypes = {};
Main.defaultProps = {};

export default Main;
