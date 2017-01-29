import React from 'react';
import _ from 'lodash'
import { AppBar, Badge, Divider, List, ListItem, Paper, Tab, Tabs} from 'material-ui';
import ListButtons from './ListButtons';

const getBadge = (header, number) => (
  <Badge  badgeContent={number}  secondary={true}>
    {_.replace(header, '_', ' ')}
  </Badge>
);

const ReviewsList = ({ reviews, sessionDetails }) => {
  return (
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
                  reviews[reviewType].map((reviewItem, i) => {
                    return (
                      <div key={i}>
                        <ListItem
                          primaryText={reviewItem.user}
                          secondaryText={
                            <p className="review-comment">
                              {reviewItem.comment}
                            </p>
                          }
                          secondaryTextLines={2}
                          rightIconButton={<ListButtons reviewItem={reviewItem} sessionDetails={sessionDetails} />}
                        />
                        <Divider inset={true} />
                      </div>
                    )
                  })
                }
                </List>
              </Tab>
            )
          })
        }
      </Tabs>
    </Paper>
  )
};

export default ReviewsList;
