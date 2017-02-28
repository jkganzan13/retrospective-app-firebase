import { UPDATE_MODAL_TITLE } from '../const';

function action(modalTitle) {
  return { type: UPDATE_MODAL_TITLE, modalTitle };
}

module.exports = action;
