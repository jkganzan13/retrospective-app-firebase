/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { RESET_STATE, UPDATE_REVIEWS } from '../actions/const';
import reviewTypes from '../constants/reviewTypes';

const initialState = {
  [reviewTypes.START]: [],
  [reviewTypes.STOP]: [],
  [reviewTypes.CONTINUE]: [],
  [reviewTypes.MORE_OF]: [],
  [reviewTypes.LESS_OF]: []
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {

    case UPDATE_REVIEWS: {
      return Object.assign({}, state, {...action.reviews})
    }

    case RESET_STATE:
      return Object.assign({}, state, initialState);

    default: {
      return state;
    }
  }
}

module.exports = reducer;
