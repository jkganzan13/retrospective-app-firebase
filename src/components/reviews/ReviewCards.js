import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewButtons from './ReviewButtons';
import { dndTypes } from '../../constants';
import { DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.review.timestamp,
      originalIndex: props.findCard(props.review.timestamp).index,
    };
  },

  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveCard(droppedId, originalIndex);
    }
  },
};

const cardTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const overId = props.review.timestamp;

    if (draggedId !== overId) {
      const { index: overIndex } = props.findCard(overId);
      props.moveCard(draggedId, overIndex);
    }
  },
};

const CardHeaderIcon = ({ review, actions, sessionDetails }) => {
  return (review.user === sessionDetails.currentUser) ?
    <ReviewButtons
      reviewItem={review}
      actions={actions}
      sessionId={sessionDetails.sessionId}
    /> : null
};

const ReviewCard = (props) => {
    const {
      actions,
      sessionDetails,
      review,
      isDragging,
      connectDragSource,
      connectDropTarget
    } = props;
    const opacity = isDragging ? 0 : 1;

    const headerIcon = (
      <CardHeaderIcon
        actions={actions}
        sessionDetails={sessionDetails}
        review={review}
      />
    );

    return connectDragSource(connectDropTarget(
      <div className="reviews__card" style={{ ...style, opacity }}>
        <Card>
          <CardHeader
            title={review.user}
            openIcon={headerIcon}
            closeIcon={headerIcon}
            showExpandableButton={true}
          />
          <CardText>
            {review.comment}
          </CardText>
        </Card>
      </div>,
    ));
};

ReviewCard.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  review: PropTypes.object.isRequired,
  moveCard: PropTypes.func.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const DragAndDrop = _.flow(
  DropTarget(dndTypes.CARD, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
  DragSource(dndTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))
);

export default DragAndDrop(ReviewCard);
