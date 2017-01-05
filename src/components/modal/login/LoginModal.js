import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import JoinForm from './JoinForm'
import CreateForm from './CreateForm'
import { validationMsg } from '../../../constants/customMessages';
import { dbGetOnce, dbListen, dbWriteAndReturnKey } from '../../../helpers/firebase';
import { isValidString } from '../../../helpers/util';

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
    this.validateNameFieldError = this.validateNameFieldError.bind(this);
    this.validateSessionIdFieldError = this.validateSessionIdFieldError.bind(this);
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

    //validate name

    dbGetOnce('sessions').then((snapshot) => {
      let sessions = Object.keys(snapshot.val());



    });


    // const key = this.state.sessionId || dbWriteAndReturnKey('sessions', { createdBy: this.state.name });
    // dbListen(`reviews/${key}`, this.props.actions.updateReviews);
    //
    // if (key) {
    //   updateSessionId(key.trim());
    //   updateCurrentUser(this.state.name.trim());
    //   updateModalContent('review');
    //   toggleModal();
    // }
  }

  resetState() {
    this.setState({
      sessionId: '',
      name: '',
      sessionIdFieldErrorMsg: '',
      nameFieldErrorMsg: ''
    });
  }

  validateSessionIdFieldError() {
    const { sessionId } = this.state;
    if (isValidString(sessionId)) {
      this.setState({ sessionIdFieldErrorMsg: '' });
      return true;
    }
    if (!isValidString(sessionId)) {
      this.setState({ sessionIdFieldErrorMsg: validationMsg.ERROR });
      return false;
    }
  }

  validateNameFieldError() {
    const { name } = this.state;
    if (isValidString(name)) {
      this.setState({ nameFieldErrorMsg: '' });
      return true;
    }
    if (!isValidString(name)) {
      this.setState({ nameFieldErrorMsg: validationMsg.ERROR });
      return false;
    }
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
          <JoinForm
            {...this.state}
            nameHandleChange={this.nameHandleChange}
            sessionHandleChange={this.sessionHandleChange}
            submitSessionDetails={this.submitSessionDetails}
            validateSessionIdFieldError = {this.validateSessionIdFieldError}
            validateNameFieldError = {this.validateNameFieldError}
          />
        </Tab>
        <Tab label="Create">
          <CreateForm
            name={this.state.name}
            nameFieldErrorMsg={this.state.nameFieldErrorMsg}
            nameHandleChange={this.nameHandleChange}
            submitSessionDetails={this.submitSessionDetails}
            validateNameFieldError = {this.validateNameFieldError}
          />
        </Tab>
      </Tabs>
    );
  }
}

LoginModal.displayName = 'ModalLoginModal';
LoginModal.propTypes = {};
LoginModal.defaultProps = {};

export default LoginModal;
