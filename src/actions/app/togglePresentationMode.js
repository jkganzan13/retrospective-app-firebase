import { TOGGLE_PRESENTATION_MODE } from '../const';

function action(presentationMode) {
  return { type: TOGGLE_PRESENTATION_MODE, presentationMode };
}

module.exports = action;
