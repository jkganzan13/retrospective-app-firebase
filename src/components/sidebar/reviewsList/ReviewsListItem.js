import React from 'react';
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
      rightIconButton={reviewItem.user === sessionDetails.currentUser ? <ListButtons reviewItem={reviewItem} sessionDetails={sessionDetails} actions={actions} /> : undefined}
    />
    <Divider inset={true} />
  </div>
);

export default ReviewsListItem;
