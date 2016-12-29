import { UPDATE_USERS } from './../const';

function action(users) {
  return { type: UPDATE_USERS, users };
}

module.exports = action;
