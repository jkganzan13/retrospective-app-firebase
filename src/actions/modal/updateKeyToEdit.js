import { UPDATE_KEY_TO_EDIT } from '../const';

function action(keyToEdit) {
  return { type: UPDATE_KEY_TO_EDIT, keyToEdit };
}

module.exports = action;
