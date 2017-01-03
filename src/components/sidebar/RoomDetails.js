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

const RoomDetails = ({ roomId, currentUser, users }) => {
  return (
    <Paper>
      <AppBar
        title="Room Details"
        style={styles.appBar}
        showMenuIconButton={false}
        zDepth={0}
      >
      </AppBar>
      <List>
        <ListItem
          primaryText={roomId}
          secondaryText="Room ID"
        />
        <ListItem
          primaryText={currentUser}
          secondaryText="User Name"
        />
      </List>
    </Paper>
  )
};

export default RoomDetails;
