import React, { PropTypes } from 'react';
import { List } from 'material-ui';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({ actions, app, reviews, reviewType, sessionDetails, listClassName }) => (
  <List>
    {
      reviews[reviewType].map((reviewItem, i) => (
        <ReviewsListItem
          key={i}
          actions={actions}
          app={app}
          reviewItem={reviewItem}
          sessionDetails={sessionDetails}
        />
      ))
    }
  </List>
);

ReviewsList.propTypes = {
  actions: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  reviewType: PropTypes.string.isRequired,
  sessionDetails: PropTypes.object.isRequired
};

export default ReviewsList;
