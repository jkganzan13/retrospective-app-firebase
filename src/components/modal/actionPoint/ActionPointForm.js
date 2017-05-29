import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';
import { sanitizeText, getTimestamp } from '../../../helpers/util';
import { addReviewActionPoint } from '../../../helpers/firebase';
import { snackbarMsg, validationMsg } from '../../../constants';
import ReviewButtons from '../review/ReviewButtons';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      commentFieldErrorMsg: '',
      userValue: '',
    };

    this.onClose = this.onClose.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onUserValueChange = this.onUserValueChange.bind(this);
    this.submitActionPoint = this.submitActionPoint.bind(this);
  }

  onCommentChange(e) {
    this.props.actions.updateComment(e.target.value);
  }

  onUserValueChange(e) {
    this.setState({
      userValue: e.target.value
    });
  }

  submitActionPoint(e) {
    e.preventDefault();

    const { sessionId, currentUser } = this.props.sessionDetails;
    const { comment } = this.props.modal;
    const { selectedReview } = this.props.reviews;
    const sanitizedText = sanitizeText(comment);

    if (sanitizedText !== '') {
      const actionPointData = {
        actionable: sanitizedText,
        actionableBy: this.state.userValue,
      };
      addReviewActionPoint(sessionId, selectedReview.timestamp, actionPointData);
      this.resetCommentFieldError();
      this.props.actions.hideModal();
      let msg = snackbarMsg.ACTION_POINT_SAVED;
      this.props.actions.triggerSnackbar(msg);
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
    this.props.actions.hideModal();
  }

  resetCommentFieldError() {
    this.setState({ commentFieldErrorMsg: '' });
  }

  showCommentFieldError() {
    this.setState({ commentFieldErrorMsg: validationMsg.ERROR });
  }


  render() {
    return (
      <form className="action-point-modal" onSubmit={this.submitActionPoint}>
        <TextField
          errorText={this.state.commentFieldErrorMsg}
          floatingLabelText="Actionable By"
          onChange={this.onUserValueChange}
          value={this.state.userValue}
          fullWidth={true}
          autoFocus
        />
        <TextField
          errorText={this.state.commentFieldErrorMsg}
          floatingLabelText="Action Point"
          value={this.props.modal.comment}
          onChange={this.onCommentChange}
          multiLine={true}
          rows={2}
          rowsMax={6}
        />
        <ReviewButtons closeOnClick={this.onClose} />
      </form>
    );
  }
}

ReviewModal.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
};
ReviewModal.defaultProps = {};

export default ReviewModal;
