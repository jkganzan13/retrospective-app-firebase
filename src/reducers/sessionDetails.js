/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { RESET_STATE, UPDATE_CURRENT_USER, UPDATE_SESSION_ID, UPDATE_USERS } from '../actions/const';

const initialState = {
  users: [],
  sessionId: '',
  currentUser: ''
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {

    case UPDATE_CURRENT_USER: {
      return Object.assign({}, state, {
        currentUser: action.currentUser
      })
    }

    case UPDATE_SESSION_ID: {
      return Object.assign({}, state, {
        sessionId: action.sessionId
      })
    }

    case UPDATE_USERS: {
      return Object.assign({}, state, {
        users: action.users
      })
    }

    case RESET_STATE:
      return Object.assign({}, state, initialState);

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
