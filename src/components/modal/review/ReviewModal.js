import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './reviewmodal.cssmodule.sass';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { sanitizeText, getTimestamp } from '../../../helpers/util';
import { dbWrite } from '../../../helpers/firebase';

@cssmodules(styles)
class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviewType: '',
      comment: ''
    };
    this.onReviewChange = this.onReviewChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ reviewType: nextProps.modal.selectedReviewType });
  }

  onReviewChange(e) {
    this.setState({ comment: e.target.value });
  }

  submitReview(e) {
    const { roomId, currentUser } = this.props.roomDetails;
    const { comment, reviewType } = this.state;

    e.preventDefault();
    const sanitizedText = sanitizeText(this.state.comment);
    if (sanitizedText !== '') {
      const timestamp = getTimestamp();
      dbWrite(`reviews/${roomId}`, { user: currentUser, comment, reviewType, timestamp }, timestamp);
      this.props.actions.toggleModal();
    }
    this.setState({ comment: '' })
  }

  render() {
    return (
      <Form onSubmit={this.submitReview}>
        <FormGroup>
          <ControlLabel>{this.state.reviewType}</ControlLabel>
          <FormControl componentClass="textarea" value={this.state.comment} onChange={this.onReviewChange} />
        </FormGroup>
        <Button onClick={this.props.actions.toggleModal}>Close</Button>{' '}
        <Button type="submit" bsStyle="primary">Save changes</Button>
      </Form>
    );
  }
}

ReviewModal.displayName = 'ModalReviewReviewModal';
ReviewModal.propTypes = {};
ReviewModal.defaultProps = {};

export default ReviewModal;
