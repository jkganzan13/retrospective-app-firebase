import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import LoginForm from './login/LoginForm';
import ReviewForm from './review/ReviewForm';
import { modalTypes } from '../../constants';
import { removeUnderscore } from '../../helpers/util';

const getModalTitle = (modalType, title) => modalType === modalTypes.EDIT_REVIEW ? `EDIT REVIEW - ${title}` : title;

const getModalBody = (props) => (
  props.modal.modalType === modalTypes.LOGIN ?
    <LoginForm actions={props.actions} /> :
    <ReviewForm actions={props.actions} modal={props.modal} sessionDetails={props.sessionDetails} />
);

const Modal = (props) => (
  <Dialog
    title={getModalTitle(props.modal.modalType, removeUnderscore(props.modal.modalTitle))}
    modal={true}
    open={props.modal.isModalOpen}
    contentClassName={'modal-content'}
  >
    { getModalBody(props) }
  </Dialog>
);

Modal.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
};

export default Modal;
