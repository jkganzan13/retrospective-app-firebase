import React from 'react';
import { CommunicationVpnKey, ContentContentCopy, SocialPerson } from 'material-ui/svg-icons';
import { AppBar, Avatar, IconButton, List, ListItem, Paper } from 'material-ui';
import { snackbarMsg } from '../../constants/app';
import { grey500 } from 'material-ui/styles/colors';
import CopyToClipboard from 'react-copy-to-clipboard';

const SessionDetails = ({ sessionId, currentUser, openSnackbar, users }) => {

  const onSessionIdCopy = () => {
    openSnackbar(snackbarMsg.SESSION_ID_COPIED);
  };

  const copyIcon = (
    <CopyToClipboard text={sessionId} onCopy={onSessionIdCopy}>
      <IconButton tooltip="Click to copy." touch={true} tooltipPosition="bottom-center">
        <ContentContentCopy color={grey500} />
      </IconButton>
    </CopyToClipboard>
  );

  return (
    <Paper zDepth={1}>
      <AppBar
        title="Session Details"
        className="appbar-on-tabs"
        showMenuIconButton={false}
        zDepth={0}
      >
      </AppBar>
      <List>
        <ListItem
          primaryText={sessionId}
          secondaryText="Session ID"
          leftAvatar={<Avatar icon={<CommunicationVpnKey />} />}
          rightIconButton={copyIcon}
        />
        <ListItem
          primaryText={currentUser}
          secondaryText="User Name"
          leftAvatar={<Avatar icon={<SocialPerson />} />}
        />
      </List>
    </Paper>
  )
};

export default SessionDetails;
