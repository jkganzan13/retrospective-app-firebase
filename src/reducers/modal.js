/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { TOGGLE_MODAL, UPDATE_IS_LOGIN, SELECT_REVIEW_TYPE } from '../actions/const';

const initialState = {
  isModalOpen: true,
  isLogin: true,
  selectedReviewType: ''
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {

    case SELECT_REVIEW_TYPE: {
      return Object.assign({}, state, {
        selectedReviewType: action.selectedReviewType
      })
    }

    case UPDATE_IS_LOGIN: {
      return Object.assign({}, state, {
        isLogin: action.isLogin
      });
    }

    case TOGGLE_MODAL: {
      return Object.assign({}, state, {
        isModalOpen: !state.isModalOpen
      });
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }

  }
}

module.exports = reducer;
