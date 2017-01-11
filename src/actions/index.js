/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import updateCurrentUser from '../actions/sessionDetails/updateCurrentUser.js';
import selectReviewType from './modal/selectReviewType.js';
import updateIsLogin from './modal/updateIsLogin.js';
import updateSessionId from './sessionDetails/updateSessionId.js';
import updateUsers from './sessionDetails/updateUsers.js';
import updateReviews from '../actions/reviews/updateReviews.js';
import toggleModal from './modal/toggleModal.js';
const actions = {
  toggleModal,
  updateReviews,
  updateUsers,
  updateSessionId,
  updateIsLogin,
  selectReviewType,
  updateCurrentUser
};
module.exports = actions
