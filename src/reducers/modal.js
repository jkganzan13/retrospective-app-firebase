import {
  TOGGLE_MODAL,
  UPDATE_MODAL_TYPE,
  UPDATE_COMMENT,
  UPDATE_KEY_TO_EDIT,
  SELECT_REVIEW_TYPE,
  RESET_STATE,
} from '../actions/const';
import { modalTypes } from '../constants/app';

const initialState = {
  isModalOpen: true,
  isLogin: true,
  selectedReviewType: '',
  comment: '',
  keyToEdit: '',
  modalType: modalTypes.LOGIN
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case SELECT_REVIEW_TYPE:
      return Object.assign({}, state, {
        selectedReviewType: action.selectedReviewType
      });

    case UPDATE_MODAL_TYPE:
      return Object.assign({}, state, {
        modalType: action.modalType
      });

    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        isModalOpen: action.isModalOpen
      });

    case UPDATE_COMMENT:
      return Object.assign({}, state, {
        comment: action.comment
      });

    case UPDATE_KEY_TO_EDIT:
      return Object.assign({}, state, {
        keyToEdit: action.keyToEdit
      });

    case RESET_STATE:
      return Object.assign({}, state, initialState);

    default:
      return state;

  }

}

module.exports = reducer;
