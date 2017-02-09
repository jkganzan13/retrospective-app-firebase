import React from 'react';
import _ from 'lodash'
import { AppBar, Badge, Divider, List, ListItem, Paper, Tab, Tabs} from 'material-ui';
import ReviewsListItem from './ReviewsListItem';

const getBadge = (header, number) => (
  <Badge  badgeContent={number}  secondary={true}>
    {_.replace(header, '_', ' ')}
  </Badge>
);

const ReviewsList = ({ actions, reviews, sessionDetails }) => (
  <Paper className="reviews-list" zDepth={1}>
    <AppBar
      title="Review List"
      className="appbar-on-tabs"
      showMenuIconButton={false}
      zDepth={0}
    >
    </AppBar>
    <Tabs contentContainerClassName={'tabs'} >
      {
        _.keys(reviews).map((reviewType, i) => {
          return (
            <Tab label={getBadge(reviewType, _.size(reviews[reviewType]))} key={i}>
              <List>
              {
                reviews[reviewType].map((reviewItem, i) => (
                    <ReviewsListItem
                      key={i}
                      actions={actions}
                      reviewItem={reviewItem}
                      sessionDetails={sessionDetails}
                    />
                ))
              }
              </List>
            </Tab>
          )
        })
      }
    </Tabs>
  </Paper>
);

export default ReviewsList;
