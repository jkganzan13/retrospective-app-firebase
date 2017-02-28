import { UPDATE_MODAL_TYPE } from '../const';

function action(modalType) {
  return { type: UPDATE_MODAL_TYPE, modalType };
}

module.exports = action;
