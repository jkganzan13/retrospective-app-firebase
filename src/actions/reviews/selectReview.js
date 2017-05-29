import { SELECT_REVIEW } from './../const';

function action(review) {
  console.log(review)
  return { type: SELECT_REVIEW, review };
}

module.exports = action;
