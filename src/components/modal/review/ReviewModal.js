import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './reviewmodal.cssmodule.sass';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { sanitizeText } from '../../../helpers/util';

@cssmodules(styles)
class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviewType: '',
      review: ''
    };
    this.onReviewChange = this.onReviewChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ reviewType: nextProps.modal.selectedReviewType });
  }

  onReviewChange(e) {
    this.setState({ review: e.target.value });
  }

  submitReview(e) {
    e.preventDefault();
    const sanitizedText = sanitizeText(this.state.review);
    if (sanitizedText !== '') {
      // this.props.submitReview(this.props.reviews.selectedReviewType, this.state.review);
      console.log(this.state);
      this.props.actions.toggleModal();
    }
    this.setState({ review: '' })
  }

  render() {
    return (
      <Form onSubmit={this.submitReview}>
        <FormGroup>
          <ControlLabel>{this.state.reviewType}</ControlLabel>
          <FormControl componentClass="textarea" value={this.state.review} onChange={this.onReviewChange} />
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
