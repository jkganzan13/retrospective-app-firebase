import { UPDATE_ROOM_ID } from '../const';

function action(roomId) {
  return { type: UPDATE_ROOM_ID, roomId };
}

module.exports = action;
