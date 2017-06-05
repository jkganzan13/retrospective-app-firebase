import React, { PropTypes } from 'react';
import { Divider, ListItem } from 'material-ui';
import ListButtons from './ListButtons';

const isReviewer = (reviewItem, sessionDetails) => reviewItem.user === sessionDetails.currentUser;
const isPresentationMode = app => app.presentationMode;

const getListButtons = (actions, app, reviewItem, sessionDetails) => {
  return isReviewer(reviewItem, sessionDetails) && !isPresentationMode(app) ?
    <ListButtons
      reviewItem={reviewItem}
      sessionDetails={sessionDetails}
      actions={actions}
    /> : null;
};

const getOnClickEvent = (actions, app, reviewItem) => {
  const onClick = () => {
    actions.selectReview(reviewItem);
    actions.toggleDrawer();
  };
  return isPresentationMode(app) ? onClick : () => actions.selectReview(reviewItem);
};

const getSecondaryText = comment => (
  <p className="review-comment">
    {comment}
  </p>
);

const highlightRow = (reviewItem, selectedReview) => {
  if(reviewItem.timestamp === selectedReview.timestamp) {
    return 'reviews__item--highlighted';
  }
  return 'reviews__item';
};

const ReviewsListItem = ({ actions, app, reviewItem, sessionDetails, selectedReview }) => (
  <div className={highlightRow(reviewItem, selectedReview)}>
    <ListItem
      primaryText={reviewItem.user}
      secondaryText={getSecondaryText(reviewItem.comment)}
      secondaryTextLines={2}
      rightIconButton={getListButtons(actions, app, reviewItem, sessionDetails)}
      onClick={getOnClickEvent(actions, app, reviewItem)}
    />
    <Divider inset={true} />
  </div>
);

ReviewsListItem.propTypes = {
  actions: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  reviewItem: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  selectedReview: PropTypes.object.isRequired,
};

export default ReviewsListItem;
