import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import LoginForm from './login/LoginForm';
import ReviewForm from './review/ReviewForm';
import MediaQuery from 'react-responsive';
import { mobileWidth, modalTypes } from '../../constants';
import { removeUnderscore } from '../../helpers/util';

const getModalTitle = (modalType, title) => modalType === modalTypes.EDIT_REVIEW ? `EDIT REVIEW - ${title}` : title;

const getModalBody = (props) => (
  props.modal.modalType === modalTypes.LOGIN ?
    <LoginForm actions={props.actions} /> :
    <ReviewForm actions={props.actions} modal={props.modal} sessionDetails={props.sessionDetails} />
);

const mobileStyles = {
  contentStyle: {
    width: '100%',
    transform: 'translate(0, 0)'
  },
  bodyStyle: {
    minHeight: window.innerHeight+'px'
  },
  style: {
    paddingTop: 0,
    height: window.innerHeight+'px'
  },
  titleStyle: {
    textAlign: 'center'
  }
};

const Modal = (props) => (
  <MediaQuery maxWidth={mobileWidth}>
    {
      (matches) => {
        let styles = {};
        if(matches) { styles = mobileStyles }
        return (
          <Dialog
            title={getModalTitle(props.modal.modalType, removeUnderscore(props.modal.modalTitle))}
            modal={true}
            open={props.modal.isModalOpen}
            repositionOnUpdate={false}
            {...styles}
            contentClassName="modal-content"
          >
            { getModalBody(props) }
          </Dialog>
        )
      }
    }
  </MediaQuery>
);

Modal.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
};

export default Modal;
