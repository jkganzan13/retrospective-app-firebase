import React from 'react';
import { Well } from 'react-bootstrap';
import { AppBar, Badge, Card, CardHeader, CardText, Divider, List, ListItem, Paper, Tab, Tabs} from 'material-ui';

const styles = {
  appBar: {
    flexWrap: 'wrap',
    zIndex: 0
  },
  tabs: {
    width: '100%',
  },
};

const SessionDetails = ({ sessionId, currentUser, users }) => {
  return (
    <Paper>
      <AppBar
        title="Session Details"
        style={styles.appBar}
        showMenuIconButton={false}
        zDepth={0}
      >
      </AppBar>
      <List>
        <ListItem
          primaryText={sessionId}
          secondaryText="Session ID"
        />
        <ListItem
          primaryText={currentUser}
          secondaryText="User Name"
        />
      </List>
    </Paper>
  )
};

export default SessionDetails;
