import React from 'react';

import { RaisedButton, TextField } from 'material-ui';

class JoinForm extends React.Component {

  render() {

    const { name, nameFieldErrorMsg, nameHandleChange, sessionHandleChange, sessionId, sessionIdFieldErrorMsg, submitSessionDetails} = this.props;

    return (
      <form onSubmit={submitSessionDetails}>
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
