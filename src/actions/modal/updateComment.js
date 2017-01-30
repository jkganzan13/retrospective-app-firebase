import { UPDATE_COMMENT } from './../const';

function action(comment) {
  return { type: UPDATE_COMMENT, comment };
}

module.exports = action;
