import React from 'react';
import _ from 'lodash';
import LoginModal from './login/LoginModal'
import ReviewModal from './review/ReviewModal'
import Dialog from 'material-ui/Dialog';
import { appTitle } from '../../constants/app';

class AppModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: "join"
    }
  }

  render() {
    const { isModalOpen, isLogin, selectedReviewType } = this.props.modal;

    return (
      <Dialog
        title={isLogin ? appTitle : _.replace(selectedReviewType, '_', ' ')}
        modal={true}
        open={isModalOpen}
        contentClassName={'modal-content'}
      >
        {
          isLogin ? <LoginModal {...this.props} /> : <ReviewModal {...this.props} />
        }
      </Dialog>
    );
  }
}

AppModal.displayName = 'ModalAppModal';
AppModal.propTypes = {};
AppModal.defaultProps = {};

export default AppModal;
