import React, { PropTypes } from 'react';
import { reviewTabs } from '../../constants';
import { removeUnderscore } from '../../helpers/util';
import { AppBarMain } from '../app/';
import { FlatButton, Tabs, Tab } from 'material-ui';
import ReviewsList from '../sidebar/reviewsList/ReviewsList';
import ActionPanel from '../actionPanel/ActionPanel';

const renderTab = (tab, props) => (
  <Tab
    icon={tab.icon}
    label={removeUnderscore(tab.reviewType)}
    key={tab.reviewType}
    value={tab.reviewType}
  >
    <ReviewsList
      actions={props.actions}
      app={props.app}
      reviews={props.reviews}
      reviewType={tab.reviewType}
      sessionDetails={props.sessionDetails}
    />
  </Tab>
);

const exitOnClick = (actions) => {
  actions.togglePresentationMode(false);
};

const bottomTabStyle = {position: "fixed", bottom:"0"};

const PresentationMode = (props) => (
  <div className="presentation-container">
    <AppBarMain
      rightElement={<FlatButton label="Exit Presentation Mode" onTouchTap={exitOnClick.bind(this, props.actions)} />}
      showLeftElement={false}
      disabled={props.bottom}
    />
    <ActionPanel
      open={true}
      actions={props.actions}
      reviews={props.reviews}
      sessionDetails={props.sessionDetails}
    />
    <Tabs
      tabItemContainerStyle={props.bottom ? bottomTabStyle : null}
      contentContainerClassName={props.bottom ? 'reviews-list-mobile' : null}
      className="presentation-tabs"
      onChange={props.onTabChange}
    >
      { reviewTabs.map(tab => renderTab(tab, props)) }
    </Tabs>
  </div>
);

PresentationMode.propTypes = {
  actions: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  bottom: PropTypes.bool,
  onTabChange: PropTypes.func
};

export default PresentationMode;
