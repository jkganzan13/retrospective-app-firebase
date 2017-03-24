import React, { PropTypes } from 'react';
import { appTitle, reviewTypes } from '../../constants';
import { removeUnderscore } from '../../helpers/util';
import ReviewsList from '../sidebar/reviewsList/ReviewsList';

import { AppBar, FlatButton, Tabs, Tab } from 'material-ui';
import Loop from 'material-ui/svg-icons/av/loop';
import Stop from 'material-ui/svg-icons/av/stop';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';

const reviewTabs = [
  { icon: <PlayArrow />, reviewType: reviewTypes.START },
  { icon: <Stop />, reviewType: reviewTypes.STOP },
  { icon: <Loop />, reviewType: reviewTypes.CONTINUE },
  { icon: <TrendingUp />, reviewType: reviewTypes.MORE_OF },
  { icon: <TrendingDown />, reviewType: reviewTypes.LESS_OF },
];

const renderTab = (tab, actions, reviews, sessionDetails ) => (
  <Tab
    icon={tab.icon}
    label={removeUnderscore(tab.reviewType)}
    key={tab.reviewType}
  >
    <ReviewsList
      actions={actions}
      reviews={reviews}
      reviewType={tab.reviewType}
      sessionDetails={sessionDetails}
    />
  </Tab>
);

const exitOnClick = (actions) => {
  actions.togglePresentationMode(false);
};

const PresentationMode = ({ actions, reviews, sessionDetails }) => (
  <div className="presentation-container">
    <AppBar
      title={appTitle}
      iconElementRight={<FlatButton label="Exit Presentation Mode" onTouchTap={exitOnClick.bind(this, actions)} />}
      showMenuIconButton={false}
      zDepth={0}
    />
    <Tabs>
      { reviewTabs.map(tab => renderTab(tab, actions, reviews, sessionDetails)) }
    </Tabs>
  </div>
);

PresentationMode.propTypes = {
  actions: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired
};

export default PresentationMode;
