import { UPDATE_REVIEWS } from './../const';

function action(reviews) {
  return { type: UPDATE_REVIEWS, reviews };
}

module.exports = action;
