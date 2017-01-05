import { UPDATE_CURRENT_USER } from './../const';

function action(currentUser) {
  return { type: UPDATE_CURRENT_USER, currentUser };
}

module.exports = action;
