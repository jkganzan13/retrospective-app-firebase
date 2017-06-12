import {
  HIDE_SNACKBAR,
  TOGGLE_DRAWER,
  TOGGLE_PRESENTATION_MODE,
  TRIGGER_SNACKBAR,
} from '../actions/const';

const initialState = {
  isSnackbarOpen: false,
  snackbarMessage: '',
  presentationMode: false,
  isDrawerOpen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case HIDE_SNACKBAR:
      return Object.assign({}, state, {
        isSnackbarOpen: false,
        snackbarMessage: '',
      });

    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        isDrawerOpen: !state.isDrawerOpen
      });

    case TOGGLE_PRESENTATION_MODE:
      return Object.assign({}, state, {
        presentationMode: action.presentationMode
      });

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
