import React, { PropTypes } from 'react';
import LoginForm from './LoginForm'

const LoginModal = ({actions}) => <LoginForm actions={actions} />;

LoginModal.displayName = 'ModalLoginModal';
LoginModal.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default LoginModal;
