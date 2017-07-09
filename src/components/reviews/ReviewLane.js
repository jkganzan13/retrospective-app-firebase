import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';
import Card from './ReviewCards';
import { dndTypes, modalTypes } from '../../constants';
import { FlatButton } from 'material-ui';
import { ContentAdd } from 'material-ui/svg-icons';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const style = {
  width:216,
  display: 'inline-block'
};

const ReviewHeader = ({ reviewType }) => (
  <div className="reviews__header">
    {reviewType}
  </div>
);

const AddReviewBtn = ({ onClick }) => (
  <div className="reviews__add-btn">
    <FlatButton
      label="Add Review"
      secondary={true}
      icon={<ContentAdd />}
      onTouchTap={onClick}
    />
  </div>
);

const ReviewCardContainer = ({ moveCard, reviews, sessionDetails, actions, findCard, connectDropTarget }) => connectDropTarget(
  <div className="reviews__card-container">
    {
      reviews.map((review, i) => {
        console.log(reviews)
        if(!review) return null;
        return (
          <Card
            key={review.timestamp}
            index={i}
            review={review}
            moveCard={moveCard}
            findCard={findCard}
            sessionDetails={sessionDetails}
            actions={actions}
          />
        )
      })
    }
  </div>
);

class ReviewLane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [...props.reviews],
    };

    this.moveCard = this.moveCard.bind(this);
    this.addReviewHandler = this.addReviewHandler.bind(this);
    this.findCard = this.findCard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      reviews: [...nextProps.reviews]
    });
  }

  moveCard(timestamp, atIndex) {
    const { review, index } = this.findCard(timestamp);
    if (!review) return;
    this.setState(update(this.state, {
      reviews: {
        $splice: [
          [index, 1],
          [atIndex, 0, review],
        ],
      },
    }));
  }

  findCard(timestamp) {
    const { reviews } = this.state;
    const review = reviews.filter(r => {
      return r && r.timestamp === timestamp
    })[0];

    return {
      review,
      index: reviews.indexOf(review),
    };
  }

  addReviewHandler() {
    const { showModal, updateKeyToEdit } = this.props.actions;
    updateKeyToEdit('');
    showModal(modalTypes.REVIEW, this.props.reviewType);
  }

  render() {
    const { actions, reviewType, sessionDetails, connectDropTarget } = this.props;

    return (
      <div className="reviews__lane" style={style}>
        <ReviewHeader reviewType={reviewType} />
        <AddReviewBtn onClick={this.addReviewHandler} />
        <ReviewCardContainer
          moveCard={this.moveCard}
          reviews={this.state.reviews}
          sessionDetails={sessionDetails}
          actions={actions}
          findCard={this.findCard}
          connectDropTarget={connectDropTarget}
        />
      </div>
    );
  }
}

ReviewLane.propTypes = {
  actions: PropTypes.object.isRequired,
  reviewType: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
  sessionDetails: PropTypes.object.isRequired,
};

const cardTarget = {
  drop() {
  },
};

const DropTargetLane = DropTarget(dndTypes.CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(ReviewLane);

export default DragDropContext(HTML5Backend)(DropTargetLane);
