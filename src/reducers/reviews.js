import {
  RESET_STATE,
  SELECT_REVIEW,
  UPDATE_REVIEWS,
} from '../actions/const';
import { reviewTypes } from '../constants';

const initialState = {
  [reviewTypes.START]: [],
  [reviewTypes.STOP]: [],
  [reviewTypes.CONTINUE]: [],
  [reviewTypes.MORE_OF]: [],
  [reviewTypes.LESS_OF]: [],
  selectedReview: {
    actionTypes: []
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case RESET_STATE:
      return Object.assign({}, state, initialState);

    case SELECT_REVIEW:
      return Object.assign({}, state, {
        selectedReview: action.review
      });

    case UPDATE_REVIEWS:
      return Object.assign({}, state, {...action.reviews});

    default: {
      return state;
    }
  }
}

module.exports = reducer;
