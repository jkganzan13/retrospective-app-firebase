import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './joinform.cssmodule.sass';

import { Button, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'

@cssmodules(styles)
class JoinForm extends React.Component {

  getRoomIdValidationState() {
    return this.props.roomId.length ? 'success' : 'error';
  }

  render() {

    const { getNameValidationState, name, nameHandleChange, roomHandleChange, roomId, submitRoomDetails} = this.props;

    return (
      <Form horizontal onSubmit={submitRoomDetails} >
        <FormGroup validationState={this.getRoomIdValidationState()} >
          <Col componentClass={ControlLabel} sm={2}>Room Id</Col>
          <Col sm={10}>
            <FormControl placeholder="Required" type="text" value={roomId} onChange={roomHandleChange} />
            <FormControl.Feedback />
          </Col>
        </FormGroup>
        <FormGroup validationState={getNameValidationState()}>
          <Col componentClass={ControlLabel} sm={2}>Name</Col>
          <Col sm={10}>
            <FormControl placeholder="Required" type="text" value={name} onChange={nameHandleChange} />
            <FormControl.Feedback />
          </Col>
        </FormGroup>
        <Button type="submit" bsStyle="success">Join Room</Button>
      </Form>
    );
  }
}

JoinForm.displayName = 'ModalLoginJoinForm';
JoinForm.propTypes = {};
JoinForm.defaultProps = {};

export default JoinForm;
