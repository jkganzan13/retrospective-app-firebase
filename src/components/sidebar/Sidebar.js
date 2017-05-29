import React from 'react';
import ReviewsContainer from './reviewsList/ReviewsContainer';

const Sidebar = ({ app, actions, reviews, sessionDetails }) => {
  return (
    <div className="sidebar">
        <ReviewsContainer
          app={app}
          reviews={reviews}
          sessionDetails={sessionDetails}
          actions={actions}
        />
    </div>
  )
};

Sidebar.displayName = 'SidebarSidebar';
Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
