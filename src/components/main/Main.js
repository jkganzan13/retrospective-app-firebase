import React, { PropTypes } from 'react';
import Wheel from '../wheel/Wheel';
import Sidebar from '../sidebar/Sidebar';
import AppBarButtons from '../app/AppBarButtons';
import AppBarMenu from '../app/AppBarMenu';
import { AppBar } from 'material-ui';
import { appTitle, snackbarMsg } from '../../constants';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.onSessionIdCopy = this.onSessionIdCopy.bind(this);
  }

  logout() {
    this.props.actions.resetState();
  }

  onSessionIdCopy () {
    this.props.actions.triggerSnackbar(snackbarMsg.SESSION_ID_COPIED);
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

Main.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired
};

export default Main;
