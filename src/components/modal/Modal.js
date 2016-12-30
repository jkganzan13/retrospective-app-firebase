import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './modal.cssmodule.sass';

import LoginModal from './login/LoginModal'
import ReviewModal from './review/ReviewModal'

import { Modal } from 'react-bootstrap'

@cssmodules(styles)
class AppModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.modal.isModalOpen}>
        <Modal.Body>
          {
            this.props.modal.modalContent === 'login' ?
              <LoginModal {...this.props} />
              :
              <ReviewModal {...this.props} />
          }
        </Modal.Body>
      </Modal>
    );
  }
}

AppModal.displayName = 'ModalAppModal';
AppModal.propTypes = {};
AppModal.defaultProps = {};

export default AppModal;
