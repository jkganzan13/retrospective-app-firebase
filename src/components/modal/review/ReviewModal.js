import React from 'react';
import { FlatButton, RaisedButton, TextField } from 'material-ui';
import { sanitizeText, getTimestamp } from '../../../helpers/util';
import { dbUpdate } from '../../../helpers/firebase';
import { snackbarMsg, validationMsg } from '../../../constants/app';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentFieldErrorMsg: ''
    };
    this.onCommentChange = this.onCommentChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onCommentChange(e) {
    this.props.actions.updateComment(e.target.value);
  }

  submitReview(e) {
    e.preventDefault();

    const { sessionId, currentUser } = this.props.sessionDetails;
    const { comment, keyToEdit, selectedReviewType } = this.props.modal;
    const sanitizedText = sanitizeText(comment);

    if (sanitizedText !== '') {
      let key = keyToEdit || getTimestamp();
      dbUpdate(`reviews/${sessionId}`, { user: currentUser, comment: sanitizedText, reviewType: selectedReviewType, timestamp: key }, key);
      this.resetCommentFieldError();
      this.props.actions.toggleModal();
      let msg = keyToEdit ? snackbarMsg.REVIEW_UPDATE_ON_SUCCESS : snackbarMsg.REVIEW_SUBMIT_ON_SUCCESS;
      this.props.openSnackbar(msg);
    } else {
      this.showCommentFieldError();
    }
    this.resetComment();
  }

  resetComment() {
    this.props.actions.updateComment('');
  }

  onClose() {
    this.resetComment();
    this.props.actions.toggleModal();
  }

  resetCommentFieldError() {
    this.setState({ commentFieldErrorMsg: '' });
  }

  showCommentFieldError() {
    this.setState({ commentFieldErrorMsg: validationMsg.ERROR });
  }

  render() {

    return (
      <form className="review-modal" onSubmit={this.submitReview}>
        <TextField
          errorText={this.state.commentFieldErrorMsg}
          floatingLabelText="Enter comment"
          value={this.props.modal.comment}
          onChange={this.onCommentChange}
          multiLine={true}
          rows={2}
          fullWidth={true}
          autoFocus
        />
        <RaisedButton type="submit" label="Submit" primary={true} className="form-field-margin" />
        <FlatButton label="Close" onTouchTap={this.onClose} className="form-field-margin" />
      </form>
    );

  }
}

ReviewModal.displayName = 'ModalReviewReviewModal';
ReviewModal.propTypes = {};
ReviewModal.defaultProps = {};

export default ReviewModal;
