import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './modal.cssmodule.sass';

import LoginModal from './login/LoginModal'


import { Modal } from 'react-bootstrap'

@cssmodules(styles)
class AppModal extends React.Component {

  render() {
    return (
      <Modal show={this.props.modal.isModalOpen}>
        <Modal.Body>
          <LoginModal actions={this.props.actions} modal={this.props.modal} toggleModal={this.props.toggleModal} />
        </Modal.Body>
      </Modal>
    );
  }
}

AppModal.displayName = 'ModalAppModal';
AppModal.propTypes = {};
AppModal.defaultProps = {};

export default AppModal;
