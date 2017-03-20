import React from 'react';
import { FlatButton } from 'material-ui';
import { CommunicationVpnKey, SocialPerson } from 'material-ui/svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';

class AppBarButtons extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {

    const { logout, onSessionIdCopy } = this.props;
    const { sessionId, currentUser } = this.props.sessionDetails;

    const copyIcon = (
      <CopyToClipboard text={sessionId} onCopy={onSessionIdCopy}>
        <FlatButton label={sessionId} icon={<CommunicationVpnKey />} />
      </CopyToClipboard>
    );

    return (
      <div className="appbar-buttons">
        <FlatButton label={currentUser} icon={<SocialPerson />} />
        {copyIcon}
        <FlatButton label="Log Out" onTouchTap={logout} />
      </div>
    )
  }
}

AppBarButtons.displayName = 'MainAppBarButtons';
AppBarButtons.propTypes = {};
AppBarButtons.defaultProps = {};

export default AppBarButtons;
