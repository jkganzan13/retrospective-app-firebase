import React from 'react';
import { FlatButton, RaisedButton, TextField } from 'material-ui';
import { sanitizeText, getTimestamp } from '../../../helpers/util';
import { dbWrite } from '../../../helpers/firebase';
import { snackbarMsg, validationMsg } from '../../../constants/customMessages';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentFieldErrorMsg: ''
    };
    this.onCommentChange = this.onCommentChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  onCommentChange(e) {
    this.setState({ comment: e.target.value });
  }

  submitReview(e) {
    e.preventDefault();

    const { sessionId, currentUser } = this.props.sessionDetails;
    const { selectedReviewType } = this.props.modal;
    const { comment } = this.state;
    const sanitizedText = sanitizeText(comment);

    if (sanitizedText !== '') {
      const timestamp = getTimestamp();
      dbWrite(`reviews/${sessionId}`, { user: currentUser, comment: sanitizedText, reviewType: selectedReviewType, timestamp }, timestamp);
      this.resetCommentFieldError();
      this.props.actions.toggleModal();
      this.props.openSnackbar(snackbarMsg.REVIEW_SUBMIT_ON_SUCCESS);
    } else {
      this.showCommentFieldError();
    }
    this.resetComment();
  }

  resetComment() {
    this.setState({ comment: '' });
  }

  resetCommentFieldError() {
    this.setState({ commentFieldErrorMsg: '' });
  }

  showCommentFieldError() {
    this.setState({ commentFieldErrorMsg: validationMsg.ERROR });
  }

  render() {

    const { comment, commentFieldErrorMsg } = this.state;

    return (
      <form onSubmit={this.submitReview}>
        <TextField
          errorText={commentFieldErrorMsg}
          floatingLabelText="Enter comment"
          value={comment}
          onChange={this.onCommentChange}
          multiLine={true}
          rows={2}
          fullWidth={true}
        />
        <RaisedButton type="submit" label="Submit" primary={true} className="form-field-margin" />
        <FlatButton label="Close" onTouchTap={this.props.actions.toggleModal} className="form-field-margin" />
      </form>
    );
  }
}

ReviewModal.displayName = 'ModalReviewReviewModal';
ReviewModal.propTypes = {};
ReviewModal.defaultProps = {};

export default ReviewModal;
