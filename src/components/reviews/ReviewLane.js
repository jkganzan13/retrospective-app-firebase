import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';
import Card from './ReviewCards';
import { modalTypes } from '../../constants';
import { FlatButton } from 'material-ui';
import { ContentAdd } from 'material-ui/svg-icons';

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

const ReviewCardContainer = ({ moveCard, reviews, sessionDetails, actions }) => (
  <div className="reviews__card-container">
    {
      reviews.map((review, i) => (
        <Card
          key={review.timestamp}
          index={i}
          review={review}
          moveCard={moveCard}
          sessionDetails={sessionDetails}
          actions={actions}
        />
      ))
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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      reviews: [...nextProps.reviews]
    });
  }

  moveCard(dragIndex, hoverIndex) {
    const { reviews } = this.state;
    const dragCard = reviews[dragIndex];

    this.setState(update(this.state, {
      reviews: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    }));
  }

  addReviewHandler() {
    const { showModal, updateKeyToEdit } = this.props.actions;
    updateKeyToEdit('');
    showModal(modalTypes.REVIEW, this.props.reviewType);
  }

  render() {
    const { actions, reviewType, sessionDetails } = this.props;

    return (
      <div className="reviews__lane" style={style}>
        <ReviewHeader reviewType={reviewType} />
        <AddReviewBtn onClick={this.addReviewHandler} />
        <ReviewCardContainer
          moveCard={this.moveCard}
          reviews={this.state.reviews}
          sessionDetails={sessionDetails}
          actions={actions}
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

export default ReviewLane;
