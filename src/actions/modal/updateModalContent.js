import { UPDATE_MODAL_CONTENT } from './../const';

function action(modalContent) {
  return { type: UPDATE_MODAL_CONTENT, modalContent };
}

module.exports = action;
