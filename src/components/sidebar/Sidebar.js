import React from 'react';
import SessionDetails from './SessionDetails';
import ReviewsList from './ReviewsList';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
        <ReviewsList reviews={props.reviews} />
    </div>
  )
};

Sidebar.displayName = 'SidebarSidebar';
Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
