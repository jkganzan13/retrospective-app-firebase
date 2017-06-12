import React, { PropTypes } from 'react';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Clear from 'material-ui/svg-icons/content/clear';
import { dbRemove } from '../../helpers/firebase';


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

const ActionCards = ({ selectedReview, sessionId }) => {
  const actionableIds = Object.keys(selectedReview.actionPoints || {});

  return (
    <div className="action-block__cards-container">
      {actionableIds.map(id => getActionCards(selectedReview.actionPoints[id], id, selectedReview.timestamp, sessionId))}
    </div>
  );
};

ActionCards.propTypes = {
  selectedReview: PropTypes.object.isRequired,
  sessionId: PropTypes.string.isRequired,
};

export default ActionCards;
