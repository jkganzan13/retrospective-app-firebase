import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Divider, IconButton, IconMenu, MenuItem } from 'material-ui';
import { CommunicationVpnKey, ImageLens, NavigationMenu, SocialPerson } from 'material-ui/svg-icons';
import { reviewTypes } from '../../constants';
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
        <MenuItem primaryText={_.replace(reviewTypes.START, '_', ' ')} leftIcon={<ImageLens color="#468966" />} />
        <MenuItem primaryText={_.replace(reviewTypes.MORE_OF, '_', ' ')} leftIcon={<ImageLens color="#FFF0A5" />} />
        <MenuItem primaryText={_.replace(reviewTypes.LESS_OF, '_', ' ')} leftIcon={<ImageLens color="#FFB03B" />} />
        <MenuItem primaryText={_.replace(reviewTypes.CONTINUE, '_', ' ')} leftIcon={<ImageLens color="#B64926" />} />
        <MenuItem primaryText={_.replace(reviewTypes.STOP, '_', ' ')} leftIcon={<ImageLens color="#8E2800" />} />
        <Divider />
        <MenuItem primaryText={currentUser} leftIcon={<SocialPerson />} />
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
