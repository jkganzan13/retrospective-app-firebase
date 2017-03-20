import { UPDATE_SNACKBAR_MSG } from '../const';

function action(snackbarMessage) {
  return { type: UPDATE_SNACKBAR_MSG, snackbarMessage };
}

module.exports = action;
