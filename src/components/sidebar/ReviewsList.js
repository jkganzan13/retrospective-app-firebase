import React from 'react';
import _ from 'lodash'
import { Accordion, Badge, Panel } from 'react-bootstrap'

const getPanelHeader = (header, number) => <span>{_.replace(header, '_', ' ')} <Badge>{number}</Badge> </span>;

const ReviewsList = ({ reviews }) => {
  return (
    <Accordion>
      {
        _.keys(reviews).map((reviewType, i) => {
          return (
            <Panel header={getPanelHeader(reviewType, _.size(reviews[reviewType]))} eventKey={i} key={i} >
              {
                reviews[reviewType].map((reviewObj, i) => {
                  return (
                    <div key={i}>
                      <span>{reviewObj.userName}: {reviewObj.review}</span>
                    </div>
                  )
                })
              }
            </Panel>
          )
        })
      }
    </Accordion>
  )
};

export default ReviewsList;
