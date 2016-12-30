import React from 'react';
import RoomDetails from './RoomDetails';
import ReviewsList from './ReviewsList';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <RoomDetails {...props.roomDetails} />
      <ReviewsList reviews={props.reviews} />
    </div>
  )
};

Sidebar.displayName = 'SidebarSidebar';
Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
