import React, { PropTypes } from 'react';
import { AppBar } from 'material-ui';
import { appTitle, snackbarMsg } from '../../constants';
import { AppBarButtons, AppBarMenu } from './';

const getLeftElement = ({ actions, sessionDetails, showLeftElement, leftElement }) => {
  if(showLeftElement && actions && sessionDetails) {
    return (
      <AppBarMenu
        actions={actions}
        sessionDetails={sessionDetails}
        onSessionIdCopy={actions.triggerSnackbar.bind(this, snackbarMsg.SESSION_ID_COPIED)}
        logout={actions.resetState}
      />
    )
  }

  if(leftElement) {
    return leftElement;
  }

  return null;
};

const getRightElement = ({ actions, sessionDetails, showRightElement, rightElement }) => {
  if(showRightElement && actions && sessionDetails) {
    return (
      <AppBarButtons
        togglePresentationMode={actions.togglePresentationMode}
        actions={actions}
        sessionDetails={sessionDetails}
        onSessionIdCopy={actions.triggerSnackbar.bind(this, snackbarMsg.SESSION_ID_COPIED)}
        logout={actions.resetState}
      />
    )
  }

  if(rightElement) {
    return rightElement;
  }

  return null;
};

const AppBarMain = (props) => (
  props.disabled ? null :
    <AppBar
      className="app-bar"
      title={appTitle}
      titleStyle={props.titleStyle}
      iconElementLeft={getLeftElement(props)}
      showMenuIconButton={props.showLeftElement}
      iconStyleRight={{marginTop: 0}}
      iconElementRight={getRightElement(props)}
      zDepth={0}
    />
);

AppBarMain.propTypes = {
  actions: PropTypes.object,
  disabled: PropTypes.bool,
  leftElement: PropTypes.element,
  rightElement: PropTypes.element,
  sessionDetails: PropTypes.object,
  showLeftElement: PropTypes.bool,
  showRightElement: PropTypes.bool,
  titleStyle: PropTypes.object,
};

AppBarMain.defaultProps = {
  disabled: false,
  showLeftElement: true,
  showRightElement: true,
};

export default AppBarMain;
