import React, { PropTypes } from 'react';
import { FlatButton } from 'material-ui';
import { CommunicationVpnKey, SocialPerson } from 'material-ui/svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';

const AppBarButtons = ({ logout, onSessionIdCopy, sessionDetails }) => (
  <div className="appbar-buttons">
    <FlatButton disabled={true} label={sessionDetails.currentUser} icon={<SocialPerson />} />
    <CopyToClipboard text={sessionDetails.sessionId} onCopy={onSessionIdCopy}>
      <FlatButton label={sessionDetails.sessionId} icon={<CommunicationVpnKey />} />
    </CopyToClipboard>
    <FlatButton label="Log Out" onTouchTap={logout} />
  </div>
);

AppBarButtons.propTypes = {
  logout: PropTypes.func.isRequired,
  onSessionIdCopy: PropTypes.func.isRequired,
  sessionDetails: PropTypes.shape({
    currentUser: PropTypes.string.isRequired,
    sessionId: PropTypes.string.isRequired
  }).isRequired
};

export default AppBarButtons;
