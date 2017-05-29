import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';

const getAvatarInitial = (name) => <Avatar>{name[0].toUpperCase()}</Avatar>;

const getActionCards = (actionPoint, id) => (
  <Card key={id}>
    <CardHeader
      title={actionPoint.actionableBy}
      subtitle="Name"
      avatar={getAvatarInitial(actionPoint.actionableBy)}
    />
    {/*<CardTitle title="Card title" subtitle="Card subtitle" />*/}
    <CardText>
      {actionPoint.actionable}
    </CardText>
    {/*<CardActions>*/}
      {/*<FlatButton label="Action1" />*/}
      {/*<FlatButton label="Action2" />*/}
    {/*</CardActions>*/}
  </Card>
);

const getActionPoints = (actionPoints = {}) => {
  const actionableIds = Object.keys(actionPoints);
  if (!actionableIds.length) {
    return null;
  }
  return actionableIds.map(id => getActionCards(actionPoints[id], id));
};

const ActionPanel = (props) => (
  <Drawer
    width={300}
    openSecondary={true}
    open={props.open}
  >
    {getActionPoints(props.selectedReview.actionPoints)}
  </Drawer>
);

ActionPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  selectedReview: PropTypes.object.isRequired,
};

ActionPanel.defaultProps = {
  open: false,
};

export default ActionPanel;
