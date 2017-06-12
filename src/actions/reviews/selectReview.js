import { SELECT_REVIEW } from './../const';

function action(review) {
  return { type: SELECT_REVIEW, review };
}

module.exports = action;
