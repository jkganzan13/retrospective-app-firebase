import React, { PropTypes } from 'react';
import Wheel from '../wheel/Wheel';
import Sidebar from '../sidebar/Sidebar';
import { AppBarMain } from '../app/';

const Main = ({ sessionDetails, reviews, actions }) => (
  <div className="main-content">
    <AppBarMain
      actions={actions}
      sessionDetails={sessionDetails}
      titleStyle={{ marginLeft: '8px' }}
    />

    <div className="content-container">
      <Wheel actions={actions} />
      <Sidebar sessionDetails={sessionDetails} reviews={reviews} actions={actions} />
    </div>
  </div>
);

Main.propTypes = {
  actions: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired
};

export default Main;
