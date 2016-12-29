/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { TOGGLE_MODAL } from '../actions/const';

const initialState = {
  isModalOpen: true
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    /*
    case YOUR_ACTION: {
      // Modify next state depending on the action and return it
      return nextState;
    }
    */
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
