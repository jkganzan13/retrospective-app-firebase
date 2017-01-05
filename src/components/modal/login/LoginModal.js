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
      sessionId: '',
      name: '',
      sessionIdFieldErrorMsg: '',
      nameFieldErrorMsg: ''
    };

    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.sessionHandleChange = this.sessionHandleChange.bind(this);
    this.tabHandleChange = this.tabHandleChange.bind(this);
    this.submitSessionDetails = this.submitSessionDetails.bind(this);
    this.generateSessionId = this.generateSessionId.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  nameHandleChange(e) {
    this.setState({ name: e.target.value });
  }

  sessionHandleChange(e) {
    this.setState({ sessionId: e.target.value });
  }

  tabHandleChange(value) {
    this.setState({ openedTab: value })
  }

  submitSessionDetails(e) {
    e.preventDefault();

    const { updateSessionId, updateCurrentUser, updateModalContent, toggleModal } = this.props.actions;

    const key = this.state.sessionId || dbWriteAndReturnKey('sessions', { name: this.state.name });
    dbListen(`reviews/${key}`, this.props.actions.updateReviews);

    if (key) {
      updateSessionId(key);
      updateCurrentUser(this.state.name);
      updateModalContent('review');
      toggleModal();
    }
  }

  validateFields({ sessionId, name }) {
    let isValid = true;
    if (sessionId.trim() === '') {
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
      sessionId: '',
      name: '',
      sessionIdFieldErrorMsg: '',
      nameFieldErrorMsg: ''
    });
  }

  generateSessionId() {
    // let key = Math.random().toString(36).substr(2, 5);
    // this.setState({ sessionId: key });
    this.props.actions.updateModalContent('review');
    this.props.actions.toggleModal();
  }

  render() {
    return (
      <Tabs onChange={this.resetState}>
        <Tab label="Join">
          <JoinForm {...this.state} nameHandleChange={this.nameHandleChange}
            sessionHandleChange={this.sessionHandleChange} submitSessionDetails={this.submitSessionDetails} />
        </Tab>
        <Tab label="Create">
          <CreateForm name={this.state.name} nameFieldErrorMsg={this.state.nameFieldErrorMsg}
            nameHandleChange={this.nameHandleChange} submitSessionDetails={this.submitSessionDetails} />
        </Tab>
      </Tabs>
    );
  }
}

LoginModal.displayName = 'ModalLoginModal';
LoginModal.propTypes = {};
LoginModal.defaultProps = {};

export default LoginModal;
