import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import Wheel from '../wheel/Wheel';
import Sidebar from '../sidebar/Sidebar';
import MobileView from '../mobile/MobileView';
import Reviews from '../reviews'
import { AppBarMain } from '../app/';

const Main = (props) => (
  <div className="main-content">
    <AppBarMain
      actions={props.actions}
      sessionDetails={props.sessionDetails}
      titleStyle={{ marginLeft: '8px' }}
    />
    <div className="main-content__body">
      <Reviews {...props} />
    </div>
  </div>
);

Main.propTypes = {
  actions: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired
};

export default Main;
