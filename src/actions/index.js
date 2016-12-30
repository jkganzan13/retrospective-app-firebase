/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import updateCurrentUser from '../actions/roomDetails/updateCurrentUser.js';
import selectReviewType from './modal/selectReviewType.js';
import updateModalContent from '../actions/modal/updateModalContent.js';
import updateRoomId from './roomDetails/updateRoomId.js';
import updateUsers from './roomDetails/updateUsers.js';
import updateReviews from '../actions/reviews/updateReviews.js';
import toggleModal from './modal/toggleModal.js';
const actions = {
  toggleModal,
  updateReviews,
  updateUsers,
  updateRoomId,
  updateModalContent,
  selectReviewType,
  updateCurrentUser
};
module.exports = actions;
