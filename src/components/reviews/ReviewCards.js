import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import ReviewButtons from './ReviewButtons';
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
      index: props.index,
    };
  },
};

const types = {
  CARD: 'card',
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

const collectDropTarget = connect => ({
  connectDropTarget: connect.dropTarget(),
});

const collectDragSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

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
  DropTarget(types.CARD, cardTarget, collectDropTarget),
  DragSource(types.CARD, cardSource, collectDragSource)
);

export default DragAndDrop(ReviewCard);
