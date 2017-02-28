import { TOGGLE_MODAL } from '../const';

function action(isModalOpen) {
  return { type: TOGGLE_MODAL, isModalOpen };
}

module.exports = action;
