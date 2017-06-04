import React, { PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import { sanitizeText } from '../../helpers/util';
import { addReviewActionPoint } from '../../helpers/firebase';
import { snackbarMsg, validationMsg } from '../../constants';

class ActionPanelForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      commentFieldErrorMsg: '',
      userValue: '',
      commentValue: '',
    };

    this.onCommentChange = this.onCommentChange.bind(this);
    this.onUserValueChange = this.onUserValueChange.bind(this);
    this.submitActionPoint = this.submitActionPoint.bind(this);
  }

  onCommentChange(e) {
    this.setState({
      commentValue: e.target.value
    });
  }

  onUserValueChange(e) {
    this.setState({
      userValue: e.target.value
    });
  }

  submitActionPoint(e) {
    e.preventDefault();
    const { sessionId } = this.props.sessionDetails;
    const { selectedReview } = this.props.reviews;
    const sanitizedText = sanitizeText(this.state.commentValue);

    if (sanitizedText !== '') {
      const actionPointData = {
        actionable: sanitizedText,
        actionableBy: this.state.userValue,
      };
      addReviewActionPoint(sessionId, selectedReview.timestamp, actionPointData);
      let msg = snackbarMsg.ACTION_POINT_SAVED;
      this.props.actions.triggerSnackbar(msg);
    } else {
      this.showCommentFieldError();
    }
    this.resetComment();
  }

  resetComment() {
    this.setState({
      commentFieldErrorMsg: '',
      userValue: '',
      commentValue: '',
    });
  }

  resetCommentFieldError() {
    this.setState({ commentFieldErrorMsg: '' });
  }

  showCommentFieldError() {
    this.setState({ commentFieldErrorMsg: validationMsg.ERROR });
  }

  render() {

    const inputStyle = {
      marginTop:'4px'
    };

    const floatingLabelStyle = {
      top:'22px'
    };

    const rootStyle = {
      height:'54px',
      width:'100%'
    };

    return (
      <form className="action-block__form" onSubmit={this.submitActionPoint}>
        <TextField
          errorText={this.state.commentFieldErrorMsg}
          floatingLabelText="Actionable By"
          floatingLabelStyle={floatingLabelStyle}
          inputStyle={inputStyle}
          style={rootStyle}
          onChange={this.onUserValueChange}
          value={this.state.userValue}
          fullWidth={true}
          autoFocus
        />
        <TextField
          errorText={this.state.commentFieldErrorMsg}
          floatingLabelText="Description"
          floatingLabelStyle={floatingLabelStyle}
          inputStyle={inputStyle}
          style={rootStyle}
          value={this.state.commentValue}
          onChange={this.onCommentChange}
        />
        <RaisedButton
          label="Add"
          primary={true}
          type="submit"
          style={inputStyle}
        />
      </form>
    );
  }
}

ActionPanelForm.propTypes = {
  actions: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
};
ActionPanelForm.defaultProps = {};

export default ActionPanelForm;
