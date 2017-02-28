import React, { PropTypes } from 'react';
import Wheel from '../wheel/Wheel';
import Sidebar from '../sidebar/Sidebar';
import AppBarButtons from '../app/AppBarButtons';
import AppBarMenu from '../app/AppBarMenu';
import { AppBar } from 'material-ui';
import { appTitle } from '../../constants/app';
import { snackbarMsg } from '../../constants/app';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      title: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.logout = this.logout.bind(this);
    this.onSessionIdCopy = this.onSessionIdCopy.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(title) {
    this.setState({ title });
  }

  openModal() {
    this.toggleModal(true);
  }

  closeModal() {
    this.toggleModal(false);
  }

  toggleModal(isModalOpen) {
    this.setState({ isModalOpen });
  }

  logout() {
    this.props.actions.resetState();
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
          <Wheel
            actions={actions}
            setTitle={this.setTitle}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
          <Sidebar sessionDetails={sessionDetails} reviews={reviews} actions={actions} />
        </div>
      </div>

    );
  }
}

Main.displayName = 'MainMain';
Main.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired
};
Main.defaultProps = {};

export default Main;
