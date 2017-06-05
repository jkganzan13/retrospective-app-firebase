import React from 'react';
import { dbRemove } from '../../../helpers/firebase';
import { IconButton, IconMenu, MenuItem } from 'material-ui';
import { NavigationMoreVert } from 'material-ui/svg-icons';
import { modalTypes } from '../../../constants'

// TODO: refactor this
class ListButtons extends React.Component{
  constructor(props) {
    super(props);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  editReview() {
    const { reviewItem } = this.props;
    const { showModal, updateKeyToEdit } = this.props.actions

    showModal(modalTypes.EDIT_REVIEW, reviewItem.reviewType, reviewItem.comment);
    updateKeyToEdit(reviewItem.timestamp);
  }

  deleteReview() {
    const { reviewItem, sessionDetails } = this.props;
    dbRemove(`reviews/${sessionDetails.sessionId}/${reviewItem.timestamp}`);
  }

  render() {
    return (
      <IconMenu iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>} className="reviews-list-buttons">
        <MenuItem primaryText="Edit Review" onTouchTap={this.editReview} />
        <MenuItem primaryText="Delete Review" onTouchTap={this.deleteReview} />
      </IconMenu>
    )
  }
}

export default ListButtons;
