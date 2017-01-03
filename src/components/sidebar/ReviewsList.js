import React from 'react';
import _ from 'lodash'
import { AppBar, Badge, Divider, List, ListItem, Paper, Tab, Tabs} from 'material-ui';

const getBadge = (header, number) => (
  <Badge  badgeContent={number}  secondary={true}>
    {_.replace(header, '_', ' ')}
  </Badge>
);

const styles = {
  appBar: {
    flexWrap: 'wrap',
    zIndex: 0
  },
  tabs: {
    width: '100%',
  },
};

const ReviewsList = ({ reviews }) => {
  return (
    <Paper style={{height:'480px'}}>
      <AppBar
        title="Review List"
        style={styles.appBar}
        showMenuIconButton={false}
        zDepth={0}
      >
      </AppBar>
      <Tabs style={styles.tabs} contentContainerStyle={{overflowY:'scroll', height:'368px'}}>
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
                            <p style={{WebkitLineClamp: 0, height: ''}}>
                              {reviewItem.comment}
                            </p>
                          }
                          secondaryTextLines={2}
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
