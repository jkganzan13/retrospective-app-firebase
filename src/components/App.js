import React from 'react';
import AppModal from './modal/Modal';
import Wheel from './wheel/Wheel';
import Sidebar from './sidebar/Sidebar';
import './app.css';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div className="index">
        <AppModal {...this.props} />
        <Wheel actions={this.props.actions} />
        <Sidebar roomDetails={this.props.roomDetails} reviews={this.props.reviews} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
