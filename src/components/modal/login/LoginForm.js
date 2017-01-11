import React from 'react';
import { TextField } from 'material-ui';
import LoginButtons from './LoginButtons';

import { isValidString } from '../../../helpers/util';
import { validationMsg } from '../../../constants/customMessages';
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

  async createOnClick(){
    const { updateReviews } = this.props.actions;
    const { name, sessionId } = this.state;

    if(this.areFieldsValid(name, sessionId)) {

      let sessionIdTrimmed = sessionId.trim();
      let nameTrimmed = name.trim();
      let key = await this.findSessionIdInDb(sessionIdTrimmed);

      if (key) {
        this.invalidateSessionId(validationMsg.SESSION_ID_NOT_UNIQUE);
      } else {
        key = sessionIdTrimmed;
        dbWrite('sessions', { createdBy: name }, sessionIdTrimmed);
        dbListen(`reviews/${key}`, updateReviews);
        this.updateRoomDetails(nameTrimmed, key)
      }

    }

  }

  async joinOnClick(e){
    e.preventDefault();

    const { updateReviews } = this.props.actions;
    const { name, sessionId } = this.state;

    if(this.areFieldsValid(name, sessionId)) {

      let key = await this.findSessionIdInDb(sessionId.trim());
      let nameTrimmed = name.trim();

      if (key) {
        dbListen(`reviews/${key}`, updateReviews);
        this.updateRoomDetails(nameTrimmed, key)
      } else {
        this.invalidateSessionId(validationMsg.SESSION_ID_NOT_FOUND);
      }

    }

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

  async findSessionIdInDb(sessionId) {
    this.toggleLoading();
    let sessions = await dbGetOnce('sessions');
    let sessionsList = Object.keys(sessions.val());
    this.toggleLoading();
    return (sessionsList.includes(sessionId)) ? sessionId : false;
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

  toggleLoading() {
    this.setState({ loading: !this.state.loading })
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
