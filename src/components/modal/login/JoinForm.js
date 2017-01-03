import React from 'react';

import { RaisedButton, TextField } from 'material-ui';

class JoinForm extends React.Component {

  render() {

    const { name, nameFieldErrorMsg, nameHandleChange, roomHandleChange, roomId, sessionIdFieldErrorMsg, submitRoomDetails} = this.props;

    return (
      <form onSubmit={submitRoomDetails}>
        <TextField
          errorText={sessionIdFieldErrorMsg}
          floatingLabelText="Session ID"
          value={roomId}
          onChange={roomHandleChange}
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
