import { SHOW_MODAL } from '../const';

function action(modalType, modalTitle, comment = '') {
  return { type: SHOW_MODAL, modalType, modalTitle, comment };
}

module.exports = action;
