import _ from 'lodash';
import { UPDATE_REVIEWS } from './../const';
import reviewTypes from '../../constants/reviewTypes';


const sortReviewsByType = (reviews) => {
  let sortedReviews = {};

  _.forEach(reviewTypes, (reviewType) => {
    sortedReviews[reviewType] = _.filter(reviews, ['reviewType', reviewType])
  });

  return sortedReviews;
};

function action(reviews) {
  let sortedReviews = sortReviewsByType(reviews);
  return { type: UPDATE_REVIEWS, reviews: sortedReviews };
}

module.exports = action;
