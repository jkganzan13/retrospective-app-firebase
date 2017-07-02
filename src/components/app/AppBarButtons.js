import React, { PropTypes } from 'react';
import { FlatButton, IconButton } from 'material-ui';
import { CommunicationVpnKey, NavigationFullscreen, SocialPerson } from 'material-ui/svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';

const presentationIconStyles = {
  height: 36,
  padding: 0,
  width: 24,
  lineHeight: 36,
};

const PresentationModeIcon = ({ onClick }) => (
  <IconButton
    onTouchTap={onClick}
    tooltip="Enter Presentation Mode"
    tooltipPosition="bottom-center"
    className="appbar-buttons__fullscreen"
    style={presentationIconStyles}
  >
    <NavigationFullscreen/>
  </IconButton>
);

const SessionId = ({ sessionId, onSessionIdCopy }) => (
  <CopyToClipboard
    text={sessionId}
    onCopy={onSessionIdCopy}
  >
    <FlatButton
      label={sessionId}
      icon={<CommunicationVpnKey />}
    />
  </CopyToClipboard>
);

const AppBarButtons = ({ logout, onSessionIdCopy, sessionDetails, togglePresentationMode }) => (
  <div className="appbar-buttons">
    <FlatButton
      disabled
      label={sessionDetails.currentUser}
      icon={<SocialPerson />}
    />
    <SessionId
      sessionId={sessionDetails.sessionId}
      onSessionIdCopy={onSessionIdCopy}
    />
    <PresentationModeIcon
      onClick={() => togglePresentationMode(true)}
    />
    <FlatButton
      label="Log Out"
      onTouchTap={logout}
    />
  </div>
);

AppBarButtons.propTypes = {
  logout: PropTypes.func.isRequired,
  onSessionIdCopy: PropTypes.func.isRequired,
  togglePresentationMode: PropTypes.func.isRequired,
  sessionDetails: PropTypes.shape({
    currentUser: PropTypes.string.isRequired,
    sessionId: PropTypes.string.isRequired
  }).isRequired
};

export default AppBarButtons;
