import React from 'react';
import AppModal from './modal/Modal';
import './app.css';

class AppComponent extends React.Component {
  componentDidMount() {
  }

  render() {
    const { isModalOpen } = this.props.modal;
    const { toggleModal } = this.props.actions;

    return (

      <div className="index">

        {/*<Popup show={this.state.show} toggleModal={this.toggleModal.bind(this)}*/}
               {/*setUserName={this.setUserName} setRoomId={this.setRoomId}*/}
               {/*generateRoomId={this.generateRoomId} joinRoom={this.joinRoom}*/}
        {/*/>*/}
        <AppModal actions={this.props.actions} modal={this.props.modal} toggleModal={toggleModal} />

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
