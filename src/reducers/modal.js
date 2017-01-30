/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { TOGGLE_MODAL, UPDATE_COMMENT, UPDATE_IS_LOGIN, UPDATE_KEY_TO_EDIT, SELECT_REVIEW_TYPE } from '../actions/const';

const initialState = {
  isModalOpen: true,
  isLogin: true,
  selectedReviewType: '',
  comment: '',
  keyToEdit: ''
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case SELECT_REVIEW_TYPE:
      return Object.assign({}, state, {
        selectedReviewType: action.selectedReviewType
      });

    case UPDATE_IS_LOGIN:
      return Object.assign({}, state, {
        isLogin: action.isLogin
      });

    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        isModalOpen: !state.isModalOpen
      });

    case UPDATE_COMMENT:
      return Object.assign({}, state, {
        comment: action.comment
      });

    case UPDATE_KEY_TO_EDIT:
      return Object.assign({}, state, {
        keyToEdit: action.keyToEdit
      });

    default:
      return state;

  }

}

module.exports = reducer;
