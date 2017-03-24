import React, { PropTypes } from 'react';
import { Divider, ListItem } from 'material-ui';
import ListButtons from './ListButtons';

const ReviewsListItem = ({ actions, reviewItem, sessionDetails }) => (
  <div>
    <ListItem
      primaryText={reviewItem.user}
      secondaryText={
        <p className="review-comment">
          {reviewItem.comment}
        </p>
      }
      secondaryTextLines={2}
      rightIconButton={reviewItem.user === sessionDetails.currentUser ? <ListButtons reviewItem={reviewItem} sessionDetails={sessionDetails} actions={actions} /> : null}
    />
    <Divider inset={true} />
  </div>
);

ReviewsListItem.propTypes = {
  actions: PropTypes.object.isRequired,
  reviewItem: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired
};

export default ReviewsListItem;
