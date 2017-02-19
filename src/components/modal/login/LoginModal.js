import React, { PropTypes } from 'react';
import LoginForm from './LoginForm'

const LoginModal = (props) => <LoginForm {...props} />;

LoginModal.displayName = 'ModalLoginModal';
LoginModal.propTypes = {
  actions: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default LoginModal;
