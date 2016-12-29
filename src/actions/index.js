/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import firebaseWrite from '../actions/firebase/firebaseWrite.js';
import firebaseListenThenDispatch from '../actions/firebase/firebaseListenThenDispatch.js';
import firebaseGetOnce from '../actions/firebase/firebaseGetOnce.js';
import firebaseListen from '../actions/firebase/firebaseListen.js';
import updateRoomId from '../actions/app/updateRoomId.js';
import updateUsers from '../actions/app/updateUsers.js';
import updateReviews from '../actions/reviews/updateReviews.js';
import toggleModal from '../actions/app/toggleModal.js';
const actions = {
  toggleModal,
  updateReviews,
  updateUsers,
  updateRoomId,
  firebaseListen,
  firebaseGetOnce,
  firebaseListenThenDispatch,
  firebaseWrite
};
module.exports = actions;
