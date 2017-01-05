import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

class JoinForm extends React.Component {

  constructor(props) {
    super(props);
    this.validateFields = this.validateFields.bind(this);
  }

  validateFields(e) {
    e.preventDefault();
    const { validateNameFieldError, validateSessionIdFieldError } = this.props;

    let isNameIdFieldValid = validateNameFieldError();
    let isSessionIdFieldValid = validateSessionIdFieldError();

    if (isNameIdFieldValid && isSessionIdFieldValid) {
      this.props.submitSessionDetails();
    }
  }

  render() {

    const { name, nameFieldErrorMsg, nameHandleChange, sessionHandleChange, sessionId, sessionIdFieldErrorMsg } = this.props;

    return (
      <form onSubmit={this.validateFields}>
        <TextField
          errorText={sessionIdFieldErrorMsg}
          floatingLabelText="Session ID"
          value={sessionId}
          onChange={sessionHandleChange}
          fullWidth={true}
        />
        <TextField
          errorText={nameFieldErrorMsg}
          floatingLabelText="Name"
          value={name}
          onChange={nameHandleChange}
          fullWidth={true}
        />
        <RaisedButton type="submit" label="Submit" primary={true} style={{ marginTop: '14px' }}/>
      </form>
    );
  }
}

JoinForm.displayName = 'ModalLoginJoinForm';
JoinForm.propTypes = {};
JoinForm.defaultProps = {};

export default JoinForm;
