import React from 'react';
import PropTypes from 'prop-types';
import ReviewLane from './ReviewLane';
import { reviewTypes } from '../../constants';

const reviewTypesArray = Object.keys(reviewTypes).map(key => reviewTypes[key]);

const Reviews = (props) => (
  <div className="reviews">
    {
      reviewTypesArray.map((type, i) => (
        <ReviewLane
          key={i}
          reviewType={type}
          reviews={props.reviews[type]}
          sessionDetails={props.sessionDetails}
          actions={props.actions}
        />
      ))
    }
  </div>
);

Reviews.propTypes = {
  actions: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired
};

export default Reviews;
