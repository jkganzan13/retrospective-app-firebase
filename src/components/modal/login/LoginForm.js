import React from 'react';
import { TextField } from 'material-ui';
import LoginButtons from './LoginButtons';
import { isValidString } from '../../../helpers/util';
import { validationMsg } from '../../../constants/app';
import { dbGetOnce, dbListen, dbWrite } from '../../../helpers/firebase';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sessionId: '',
      name: '',
      sessionIdFieldErrorMsg: '',
      nameFieldErrorMsg: '',
      loading: false
    };

    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.sessionHandleChange = this.sessionHandleChange.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
    this.joinOnClick = this.joinOnClick.bind(this);
  }

  createOnClick(){
    const { name, sessionId } = this.state;

    if(this.areFieldsValid(name, sessionId)) {

      let sessionIdTrimmed = sessionId.trim();

      this.findSessionIdInDb(sessionIdTrimmed).then((key) => {
        if (key) {
          this.invalidateSessionId(validationMsg.SESSION_ID_NOT_UNIQUE);
        } else {
          key = sessionIdTrimmed;
          dbWrite('sessions', { createdBy: name }, sessionIdTrimmed);
          this.initializeSession(key, name);
        }
      });
    }
  }

  joinOnClick(e){
    e.preventDefault();

    const { name, sessionId } = this.state;

    if(this.areFieldsValid(name, sessionId)) {
      this.findSessionIdInDb(sessionId.trim()).then((key) => {
        if (key) {
          this.initializeSession(key, name);
        } else {
          this.invalidateSessionId(validationMsg.SESSION_ID_NOT_FOUND);
        }
      });
    }

  }

  initializeSession(sessionKey, name) {
    dbListen(`reviews/${sessionKey}`, this.props.closeModal);
    this.updateRoomDetails(name.trim(), sessionKey);
  }

  areFieldsValid(name, sessionId) {
    this.resetErrorFields();
    let isNameFieldValid = this.checkValidation(name, 'nameFieldErrorMsg');
    let isSessionFieldValid = this.checkValidation(sessionId, 'sessionIdFieldErrorMsg');
    return isNameFieldValid && isSessionFieldValid;
  }

  resetErrorFields() {
    this.removeFieldErrorMsg('nameFieldErrorMsg');
    this.removeFieldErrorMsg('sessionIdFieldErrorMsg');
  }

  checkValidation(itemToValidate, fieldMsgKey) {
    if (isValidString(itemToValidate)) {
      return this.removeFieldErrorMsg(itemToValidate)
    }
    if (!isValidString(itemToValidate)) {
      return this.throwFieldErrorMsg(fieldMsgKey)
    }
  }

  findSessionIdInDb(sessionId) {
    this.toggleLoading(true);
    return dbGetOnce('sessions').then((sessions) => {
      let sessionsList = Object.keys(sessions.val());
      this.toggleLoading(false);
      return (sessionsList.includes(sessionId)) ? sessionId : false;
    });
  }

  invalidateSessionId(message) {
    this.resetErrorFields();
    this.throwFieldErrorMsg('sessionIdFieldErrorMsg', message);
  }

  removeFieldErrorMsg(key, message = '') {
    this.setState({ [key]: message });
    return true;
  }

  throwFieldErrorMsg(key, message = validationMsg.ERROR) {
    this.setState({ [key]: message });
    return false;
  }

  updateRoomDetails(name, key) {
    const { updateSessionId, updateCurrentUser, updateIsLogin, toggleModal } = this.props.actions;

    updateSessionId(key);
    updateCurrentUser(name.trim());
    updateIsLogin(false);
    toggleModal();
  }

  toggleLoading(isLoading = !this.state.loading) {
    this.setState({ loading: isLoading })
  }

  generateRandomKey(length) {
    return Math.random().toString(36).substr(2, length);
  }

  nameHandleChange(e) {
    this.setState({ name: e.target.value });
  }

  sessionHandleChange(e) {
    this.setState({ sessionId: e.target.value });
  }

  render() {
    const { loading, name, nameFieldErrorMsg, sessionId, sessionIdFieldErrorMsg } = this.state;

    return (
      <form onSubmit={this.joinOnClick}>
        <TextField
          errorText={sessionIdFieldErrorMsg}
          floatingLabelText="Session ID"
          value={sessionId}
          onChange={this.sessionHandleChange}
          fullWidth={true}
          disabled={loading}
          autoFocus
        />
        <TextField
          errorText={nameFieldErrorMsg}
          floatingLabelText="Name"
          value={name}
          onChange={this.nameHandleChange}
          fullWidth={true}
          disabled={loading}
        />
        <LoginButtons showProgress={loading} createOnClick={this.createOnClick} />
      </form>
    );
  }
}

LoginForm.displayName = 'ModalLoginLoginForm';
LoginForm.propTypes = {};
LoginForm.defaultProps = {};

export default LoginForm;
