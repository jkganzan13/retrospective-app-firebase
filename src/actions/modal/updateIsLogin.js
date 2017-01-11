import { UPDATE_IS_LOGIN } from './../const';

function action(isLogin) {
  return { type: UPDATE_IS_LOGIN, isLogin };
}

module.exports = action;
