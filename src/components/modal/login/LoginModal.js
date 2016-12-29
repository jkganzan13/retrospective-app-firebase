import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './loginmodal.cssmodule.sass';

import { Accordion, Button, Form, FormGroup, FormControl, ControlLabel, Panel, Modal, Col } from 'react-bootstrap'
import JoinForm from './JoinForm'
import CreateForm from './CreateForm'


@cssmodules(styles)
class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomId: '',
      name: ''
    };

    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.roomHandleChange = this.roomHandleChange.bind(this);
    this.getNameValidationState = this.getNameValidationState.bind(this);
    this.submitRoomDetails = this.submitRoomDetails.bind(this);
    this.generateRoomId = this.generateRoomId.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  nameHandleChange(e) {
    this.setState({ name: e.target.value });
  }

  roomHandleChange(e) {
    this.setState({ roomId: e.target.value });
  }

  submitRoomDetails(e) {
    e.preventDefault();
    console.log(this.state.roomId)
  }

  getNameValidationState() {
    return this.state.name.length ? 'success' : 'error';
  }

  resetState() {
    this.setState({
      roomId: '',
      name: ''
    });
  }

  generateRoomId() {
    let key = Math.random().toString(36).substr(2, 5);
    this.setState({ roomId: key });
  }

  render() {
    return (
      <Accordion>
        <Panel header="JOIN ROOM" eventKey="1" onSelect={this.resetState} >
          <JoinForm {...this.state} getNameValidationState={this.getNameValidationState} nameHandleChange={this.nameHandleChange}
                    roomHandleChange={this.roomHandleChange} submitRoomDetails={this.submitRoomDetails} />
        </Panel>
        <Panel header="CREATE ROOM" eventKey="2" onSelect={this.resetState} onEntered={this.generateRoomId} >
          <CreateForm {...this.state} getNameValidationState={this.getNameValidationState}
                      nameHandleChange={this.nameHandleChange} submitRoomDetails={this.submitRoomDetails} />
        </Panel>
      </Accordion>
    );
  }
}

LoginModal.displayName = 'ModalLoginModal';
LoginModal.propTypes = {};
LoginModal.defaultProps = {};

export default LoginModal;
