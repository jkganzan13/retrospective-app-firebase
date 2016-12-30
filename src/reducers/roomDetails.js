/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { UPDATE_CURRENT_USER, UPDATE_ROOM_ID, UPDATE_USERS } from '../actions/const';

const initialState = {
  users: [],
  roomId: '',
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

    case UPDATE_ROOM_ID: {
      return Object.assign({}, state, {
        roomId: action.roomId
      })
    }

    case UPDATE_USERS: {
      return Object.assign({}, state, {
        users: action.users
      })
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
