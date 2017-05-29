/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import selectReview from '../actions/reviews/selectReview.js';
import toggleDrawer from '../actions/app/toggleDrawer.js';
import togglePresentationMode from '../actions/app/togglePresentationMode.js';
import hideSnackbar from '../actions/app/hideSnackbar.js';
import hideModal from './modal/hideModal.js';
import updateSnackbarMsg from '../actions/app/updateSnackbarMsg.js';
import triggerSnackbar from './app/triggerSnackbar.js';
import resetState from '../actions/resetState.js';
import updateKeyToEdit from './modal/updateKeyToEdit.js';
import updateComment from '../actions/modal/updateComment.js';
import updateCurrentUser from '../actions/sessionDetails/updateCurrentUser.js';
import updateSessionId from './sessionDetails/updateSessionId.js';
import updateUsers from './sessionDetails/updateUsers.js';
import updateReviews from '../actions/reviews/updateReviews.js';
import showModal from './modal/showModal.js';
const actions = {
  showModal,
  updateReviews,
  updateUsers,
  updateSessionId,
  updateCurrentUser,
  updateComment,
  updateKeyToEdit,
  resetState,
  triggerSnackbar,
  updateSnackbarMsg,
  hideModal,
  hideSnackbar,
  togglePresentationMode,
  toggleDrawer,
  selectReview
};
module.exports = actions;
