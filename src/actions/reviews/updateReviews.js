import { UPDATE_REVIEWS } from './../const';

function action(reviewType, comment, user) {
  return { type: UPDATE_REVIEWS, reviewType, comment, user };
}

module.exports = action;
