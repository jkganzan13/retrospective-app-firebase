import React, { PropTypes } from 'react';
import { dbRemove } from '../../../helpers/firebase';
import { IconButton, IconMenu, MenuItem } from 'material-ui';
import { NavigationMoreVert } from 'material-ui/svg-icons';
import { modalTypes, snackbarMsg } from '../../../constants'

const editReview = ({ reviewItem, actions }) => {
  actions.showModal(modalTypes.EDIT_REVIEW, reviewItem.reviewType, reviewItem.comment);
  actions.updateKeyToEdit(reviewItem.timestamp);
};

const deleteReview = ({ reviewItem, sessionDetails, actions }) => {
  dbRemove(`reviews/${sessionDetails.sessionId}/${reviewItem.timestamp}`);
  actions.triggerSnackbar(snackbarMsg.REVIEW_DELETE_ON_SUCCESS);
};

const ListButtons = (props) => (
  <IconMenu iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>} className="reviews-list-buttons">
    <MenuItem primaryText="Edit Review" onTouchTap={() => editReview(props)} />
    <MenuItem primaryText="Delete Review" onTouchTap={() => deleteReview(props)} />
  </IconMenu>
);

ListButtons.propTypes = {
  reviewItem: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ListButtons;
