import React, { PropTypes } from 'react';
import _ from 'lodash';
import { reviewTypes } from '../../../constants';
import { removeUnderscore } from '../../../helpers/util';
import { AppBar, Badge, IconButton, Paper, Tab, Tabs } from 'material-ui';
import FullScreen from 'material-ui/svg-icons/navigation/fullscreen';
import ReviewsList from './ReviewsList';

const getBadge = (header, number) => (
  <Badge badgeContent={number}  secondary={true}>
    {removeUnderscore(header)}
  </Badge>
);

const presentationIconClick = (actions) => {
  actions.togglePresentationMode(true);
};

const presentationModeIcon = (
  <IconButton
    tooltip="Enter Presentation Mode"
    tooltipPosition="top-center"
  >
    <FullScreen/>
  </IconButton>
);

const ReviewsContainer = ({ actions, app, reviews, sessionDetails }) => (
  <Paper className="reviews-list" zDepth={1}>
    <AppBar
      title="Review List"
      className="appbar-on-tabs"
      iconElementRight={presentationModeIcon}
      onRightIconButtonTouchTap={presentationIconClick.bind(this, actions)}
      showMenuIconButton={false}
      zDepth={0}
    />
    <Tabs contentContainerClassName={'tabs'} >
      {
        _.keys(reviewTypes).map((reviewType, i) => {
          return (
            <Tab label={getBadge(reviewType, _.size(reviews[reviewType]))} key={i}>
              <ReviewsList
                actions={actions}
                app={app}
                reviews={reviews}
                reviewType={reviewType}
                sessionDetails={sessionDetails}
              />
            </Tab>
          )
        })
      }
    </Tabs>
  </Paper>
);

ReviewsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired
};

export default ReviewsContainer;
