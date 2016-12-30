import React from 'react';
import _ from 'lodash'
import { Accordion, Badge, Panel } from 'react-bootstrap'

const getPanelHeader = (header, number) => <span>{_.replace(header, '_', ' ')} <Badge>{number}</Badge> </span>;

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <h4 style={{ color: 'white' }}>Review List:</h4>
      <Accordion>
        {
          _.keys(reviews).map((reviewType, i) => {
            return (
              <Panel header={getPanelHeader(reviewType, _.size(reviews[reviewType]))} eventKey={i} key={i} >
                {
                  reviews[reviewType].map((reviewItem, i) => {
                    return (
                      <div key={i}>
                        <span>{reviewItem.user}: {reviewItem.comment}</span>
                      </div>
                    )
                  })
                }
              </Panel>
            )
          })
        }
      </Accordion>
    </div>
  )
};

export default ReviewsList;
