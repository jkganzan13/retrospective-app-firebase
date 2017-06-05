import _ from 'lodash';
import {
  RESET_STATE,
  SELECT_REVIEW,
  UPDATE_REVIEWS,
} from '../actions/const';
import { reviewTypes } from '../constants';

const initialState = {
  [reviewTypes.START]: [],
  [reviewTypes.STOP]: [],
  [reviewTypes.CONTINUE]: [],
  [reviewTypes.MORE_OF]: [],
  [reviewTypes.LESS_OF]: [],
  selectedReview: {
    actionTypes: []
  }
};

const sortReviewsByType = (reviews) => {
  return Object.keys(reviewTypes).reduce((acc, reviewType) => {
    acc[reviewType] = _.filter(reviews, ['reviewType', reviewType]);
    return acc;
  }, {});
};

const updateSelectedReview = (selectedReview, reviews) => {
  if(selectedReview.timestamp) {
    return _.find(reviews, review => review.timestamp === selectedReview.timestamp);
  }
  return selectedReview;
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case RESET_STATE:
      return Object.assign({}, state, initialState);

    case SELECT_REVIEW:
      return Object.assign({}, state, {
        selectedReview: action.review
      });

    case UPDATE_REVIEWS:
      const sortedReviews = sortReviewsByType(action.reviews);
      return Object.assign({}, state, {
          ...sortedReviews,
        selectedReview: updateSelectedReview(state.selectedReview, action.reviews)
      });

    default: {
      return state;
    }
  }
}

module.exports = reducer;
