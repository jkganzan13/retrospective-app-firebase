import { UPDATE_SESSION_ID } from '../const';

function action(sessionId) {
  return { type: UPDATE_SESSION_ID, sessionId };
}

module.exports = action;
