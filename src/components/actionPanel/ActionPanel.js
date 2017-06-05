import React, { PropTypes } from 'react';
import { dbRemove } from '../../helpers/firebase';
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
import { errorMsg } from '../../constants';

const onCloseClick = (sessionId, reviewKey, actionKey) => {
  dbRemove(`reviews/${sessionId}/${reviewKey}/actionPoints/${actionKey}`);
};
const getCloseBtn = (sessionId, reviewKey, actionKey) => (
  <Clear onClick={() => onCloseClick(sessionId, reviewKey, actionKey)} />
);
const getAvatarInitial = name => <Avatar>{name[0].toUpperCase()}</Avatar>;

const getActionCards = (actionPoint, id, reviewKey, sessionId) => (
  <Card key={id} className="action-block__card">
    <CardHeader
      title={actionPoint.actionableBy}
      subtitle='Actionable By'
      avatar={getAvatarInitial(actionPoint.actionableBy)}
      openIcon={getCloseBtn(sessionId, reviewKey, id)}
      closeIcon={getCloseBtn(sessionId, reviewKey, id)}
      showExpandableButton={true}
    />
    <CardText>
      {actionPoint.actionable}
    </CardText>
  </Card>
);

const getActionsContainer = ({ timestamp, actionPoints = {} }, sessionId) => {
  const actionableIds = Object.keys(actionPoints);
  if (!actionableIds.length) {
    return null;
  }
  return (
    <div className="action-block__cards-container">
      {actionableIds.map(id => getActionCards(actionPoints[id], id, timestamp, sessionId))}
    </div>
  );
};

const renderDrawerBody = (props) => {
  return (
    <div className="action-block__body">
      <div className="action-block__form-container">
        <h4 className="action-block__header">Action Points</h4>
        <ActionPanelForm
          actions={props.actions}
          sessionDetails={props.sessionDetails}
          reviews={props.reviews}
        />
      </div>
      <Divider />
      {getActionsContainer(props.reviews.selectedReview, props.sessionDetails.sessionId)}
    </div>
  );
};

const renderError = () => (
  <div className="action-block__error">
    <span>{errorMsg.NO_SELECTED_REVIEW}</span>
  </div>
);

const ActionPanel = (props) => (
  <Drawer
    width={300}
    openSecondary={true}
    open={props.open}
    containerClassName="action-block"
  >
    { props.reviews.selectedReview.timestamp ? renderDrawerBody(props) : renderError(props) }
  </Drawer>
);

ActionPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
};

ActionPanel.defaultProps = {
  open: false,
};

export default ActionPanel;
