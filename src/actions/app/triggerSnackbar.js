import { TRIGGER_SNACKBAR } from '../const';

function action(snackbarMessage) {
  return { type: TRIGGER_SNACKBAR, snackbarMessage };
}

module.exports = action;
