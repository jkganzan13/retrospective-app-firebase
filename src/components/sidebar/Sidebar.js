import React from 'react';
import SessionDetails from './SessionDetails';
import ReviewsList from './ReviewsList';
import { Col, Row } from 'react-bootstrap';

const Sidebar = (props) => {
  return (
    <Col md={5} sm={12} className="sidebar">
      <Row>
        <SessionDetails {...props.sessionDetails} />
      </Row>
      <Row>
        <ReviewsList reviews={props.reviews} />
      </Row>
    </Col>
  )
};

Sidebar.displayName = 'SidebarSidebar';
Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
