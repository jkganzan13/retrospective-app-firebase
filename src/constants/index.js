import React from 'react';
import Loop from 'material-ui/svg-icons/av/loop';
import Stop from 'material-ui/svg-icons/av/stop';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';

export const appTitle = "Sprint Retro";

export const mobileWidth = 535;

export const validationMsg = {
  ERROR: 'This field is required.',
  SESSION_ID_NOT_FOUND: 'Session ID not found. Please try again.',
  SESSION_ID_NOT_UNIQUE: 'Session has already been created. Try a different ID'
};

export const snackbarMsg = {
  ACTION_POINT_SAVED: 'Action Point successfully saved.',
  ACTION_POINT_UPDATED: 'Action Point successfully updated.',
  REVIEW_DELETE_ON_SUCCESS: 'Review successfully deleted.',
  REVIEW_UPDATE_ON_SUCCESS: 'Review successfully updated.',
  REVIEW_SUBMIT_ON_SUCCESS: 'Review successfully saved.',
  SESSION_ID_COPIED: 'Session ID copied.',
};

export const modalTypes = {
  LOGIN: 'LOGIN',
  REVIEW: 'REVIEW',
  EDIT_REVIEW: 'EDIT_REVIEW',
};

export const reviewTypes = {
  START: 'START',
  STOP: 'STOP',
  CONTINUE: 'CONTINUE',
  MORE_OF: 'MORE_OF',
  LESS_OF: 'LESS_OF'
};

export const reviewTabs = [
  { icon: <PlayArrow />, reviewType: reviewTypes.START },
  { icon: <Stop />, reviewType: reviewTypes.STOP },
  { icon: <Loop />, reviewType: reviewTypes.CONTINUE },
  { icon: <TrendingUp />, reviewType: reviewTypes.MORE_OF },
  { icon: <TrendingDown />, reviewType: reviewTypes.LESS_OF }
];

export const errorMsg = {
  NO_SELECTED_REVIEW: 'Please select review to add action points.'
};
