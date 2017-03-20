/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import app from '../reducers/app.js';
import reviews from '../reducers/reviews.js';
import sessionDetails from '../reducers/sessionDetails.js';
import modal from '../reducers/modal.js';
const reducers = {
  modal,
  sessionDetails,
  reviews,
  app
};
const combined = combineReducers(reducers);
module.exports = combined;
