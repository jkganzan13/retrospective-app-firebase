import React from 'react';
import { Well } from 'react-bootstrap';

const RoomDetails = ({ roomId, currentUser, users }) => {
  return (
    <div>
      <h4 style={{ color: 'white' }}>Room Details:</h4>
      <Well>
        <h5>Room Id: {roomId}</h5>
        <h5>User Name: {currentUser}</h5>
      </Well>
    </div>
  )
};

export default RoomDetails;
