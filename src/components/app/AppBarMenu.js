import React, { PropTypes } from 'react';
import { Divider, IconButton, IconMenu, MenuItem } from 'material-ui';
import { CommunicationVpnKey, NavigationMenu, SocialPerson } from 'material-ui/svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';

class AppBarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    }
  }

  render() {
    const { sessionId, currentUser } = this.props.sessionDetails;

    return (
      <IconMenu
        iconButtonElement={<IconButton><NavigationMenu color="white" /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        className="appbar-menu"
      >
        <MenuItem primaryText={currentUser} leftIcon={<SocialPerson />} disabled={true} />
        <CopyToClipboard text={sessionId} onCopy={this.props.onSessionIdCopy}>
          <MenuItem primaryText={sessionId} leftIcon={<CommunicationVpnKey />} />
        </CopyToClipboard>
        <Divider />
        <MenuItem primaryText="Log Out" onTouchTap={this.props.logout} />
      </IconMenu>
    );
  }
}

AppBarMenu.propTypes = {
  sessionDetails: PropTypes.object.isRequired
};

export default AppBarMenu;
