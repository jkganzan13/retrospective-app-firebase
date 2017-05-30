import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Clear from 'material-ui/svg-icons/content/clear';
import ActionPanelForm from './ActionPanelForm';

//TODO: add action point on presentation mode
//TODO: remove action points from list item
//TODO: add text field on action point drawer
//TODO: reset form on customer change
//TODO: edit action points
//TODO: delete action points

const CloseBtn = <Clear/>;

const getAvatarInitial = name => <Avatar>{name[0].toUpperCase()}</Avatar>;

const getActionCards = (actionPoint, id) => (
  <Card key={id} className="action-block__card">
    <CardHeader
      title={actionPoint.actionableBy}
      subtitle='Actionable By'
      avatar={getAvatarInitial(actionPoint.actionableBy)}
      openIcon={CloseBtn}
      closeIcon={CloseBtn}
      showExpandableButton={true}
    />
    <CardText>
      {actionPoint.actionable}
    </CardText>
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
    containerClassName="action-block"
  >
    <h4 className="action-block__header">Action Points</h4>
    <ActionPanelForm/>
    <Divider />
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
