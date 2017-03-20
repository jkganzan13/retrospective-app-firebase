import { HIDE_SNACKBAR, TRIGGER_SNACKBAR } from '../actions/const';

const initialState = {
  isSnackbarOpen: false,
  snackbarMessage: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case HIDE_SNACKBAR:
      return Object.assign({}, state, initialState);

    case TRIGGER_SNACKBAR:
      return Object.assign({}, state, {
        isSnackbarOpen: true,
        snackbarMessage: action.snackbarMessage
      });

    default:
      return state;

  }
}

module.exports = reducer;
