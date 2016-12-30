import { SELECT_REVIEW_TYPE } from '../const';

function action(selectedReviewType) {
  return { type: SELECT_REVIEW_TYPE, selectedReviewType };
}

module.exports = action;
