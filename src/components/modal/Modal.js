import React, { PropTypes } from 'react';
import _ from 'lodash';
import LoginModal from './login/LoginModal'
import ReviewModal from './review/ReviewModal'
import Dialog from 'material-ui/Dialog';

const Modal = ({ children, isModalOpen, title }) => (
  <Dialog
    title={title}
    modal={true}
    open={isModalOpen}
    contentClassName={'modal-content'}
  >
    {children}
  </Dialog>
);

Modal.displayName = 'ModalModal';
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};
Modal.defaultProps = {};

export default Modal;
