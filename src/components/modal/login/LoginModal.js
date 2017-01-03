import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import JoinForm from './JoinForm'
import CreateForm from './CreateForm'
import { validationMsg } from '../../../constants/customMessages';
import { dbListen, dbWriteAndReturnKey } from '../../../helpers/firebase';



class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomId: '',
      name: '',
      sessionIdFieldErrorMsg: '',
      nameFieldErrorMsg: ''
    };

    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.roomHandleChange = this.roomHandleChange.bind(this);
    this.tabHandleChange = this.tabHandleChange.bind(this);
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

  tabHandleChange(value) {
    this.setState({ openedTab: value })
  }

  submitRoomDetails(e) {
    e.preventDefault();

    const { updateRoomId, updateCurrentUser, updateModalContent, toggleModal } = this.props.actions;

    const key = this.state.roomId || dbWriteAndReturnKey('rooms', { name: this.state.name });
    dbListen(`reviews/${key}`, this.props.actions.updateReviews);

    if (key) {
      updateRoomId(key);
      updateCurrentUser(this.state.name);
      updateModalContent('review');
      toggleModal();
    }
  }

  validateFields({ roomId, name }) {
    let isValid = true;
    if (roomId.trim() === '') {
      this.setState({ sessionIdFieldErrorMsg: validationMsg.ERROR });
      isValid = false;
    }
    if (name.trim() === '') {
      this.setState({ nameFieldErrorMsg: validationMsg.ERROR });
      isValid = false;
    }
    return isValid;
  }

  resetState() {
    this.setState({
      roomId: '',
      name: '',
      sessionIdFieldErrorMsg: '',
      nameFieldErrorMsg: ''
    });
  }

  generateRoomId() {
    // let key = Math.random().toString(36).substr(2, 5);
    // this.setState({ roomId: key });
    this.props.actions.updateModalContent('review');
    this.props.actions.toggleModal();
  }

  render() {
    return (
      <Tabs onChange={this.resetState}>
        <Tab label="Join">
          <JoinForm {...this.state} nameHandleChange={this.nameHandleChange}
            roomHandleChange={this.roomHandleChange} submitRoomDetails={this.submitRoomDetails} />
        </Tab>
        <Tab label="Create">
          <CreateForm name={this.state.name} nameFieldErrorMsg={this.state.nameFieldErrorMsg}
            nameHandleChange={this.nameHandleChange} submitRoomDetails={this.submitRoomDetails} />
        </Tab>
      </Tabs>
    );
  }
}

LoginModal.displayName = 'ModalLoginModal';
LoginModal.propTypes = {};
LoginModal.defaultProps = {};

export default LoginModal;
