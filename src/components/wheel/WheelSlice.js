import React, { PropTypes } from 'react';
import WheelSliceContent from './WheelSliceContent';

const WheelSlice = ({ name, onClick, sliceStyle, sliceContentStyle }) => (
  <li className="slice" style={sliceStyle} onClick={onClick}>
    <WheelSliceContent name={name} sliceContentStyle={sliceContentStyle} />
  </li>
);

WheelSlice.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sliceStyle: PropTypes.shape({
    transform: PropTypes.string
  }).isRequired,
  sliceContentStyle: PropTypes.shape({
    background: PropTypes.string,
    transform: PropTypes.string
  }).isRequired
};

export default WheelSlice;
