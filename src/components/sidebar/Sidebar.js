import React from 'react';
import SessionDetails from './SessionDetails';
import ReviewsList from './reviewsList/ReviewsList';

const Sidebar = ({ actions, reviews, sessionDetails }) => {
  return (
    <div className="sidebar">
        <ReviewsList reviews={reviews} sessionDetails={sessionDetails} actions={actions} />
    </div>
  )
};

Sidebar.displayName = 'SidebarSidebar';
Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
