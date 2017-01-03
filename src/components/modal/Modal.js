import React from 'react';
import _ from 'lodash';
import LoginModal from './login/LoginModal'
import ReviewModal from './review/ReviewModal'
import Dialog from 'material-ui/Dialog';

class AppModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: "join"
    }
  }

  render() {
    const { isModalOpen, modalContent, selectedReviewType } = this.props.modal;

    return (
      <Dialog
        title={modalContent === 'login' ? "Session Login" : _.replace(selectedReviewType, '_', ' ')}
        modal={true}
        open={isModalOpen}
        contentStyle={{ width: '25%', minWidth: '480px' }}
      >
        {
          modalContent === 'login' ? <LoginModal {...this.props} /> : <ReviewModal {...this.props} />
        }
      </Dialog>
    );
  }
}

AppModal.displayName = 'ModalAppModal';
AppModal.propTypes = {};
AppModal.defaultProps = {};

export default AppModal;
