import {
  HIDE_MODAL,
  SHOW_MODAL,
  UPDATE_MODAL_TYPE,
  UPDATE_COMMENT,
  UPDATE_KEY_TO_EDIT,
  SELECT_REVIEW_TYPE,
  RESET_STATE,
  UPDATE_MODAL_TITLE,
} from '../actions/const';
import { appTitle, modalTypes } from '../constants';

const initialState = {
  isModalOpen: true,
  comment: '',
  keyToEdit: '',
  modalType: modalTypes.LOGIN,
  modalTitle: appTitle
};

//TODO: review:{} => review.comment, review.key
//TODO: actionPoint:{} => ap.id, ap.actionedBy, ap.action
//TODO: set selected review

function reducer(state = initialState, action) {

  switch (action.type) {

    case HIDE_MODAL:
      return Object.assign({}, state, {
        isModalOpen: false,
        modalType: modalTypes.REVIEW
      });

    case SHOW_MODAL:
      return Object.assign({}, state, {
        isModalOpen: true,
        modalType: action.modalType,
        modalTitle: action.modalTitle,
        comment: action.comment
      });

    case UPDATE_COMMENT:
      return Object.assign({}, state, {
        comment: action.comment
      });

    case UPDATE_KEY_TO_EDIT:
      return Object.assign({}, state, {
        keyToEdit: action.keyToEdit
      });

    case UPDATE_MODAL_TITLE:
      return Object.assign({}, state, {
        modalTitle: action.modalTitle
      });

    case RESET_STATE:
      return Object.assign({}, state, initialState);

    default:
      return state;

  }

}

module.exports = reducer;
