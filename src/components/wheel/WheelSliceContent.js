import React, { PropTypes } from 'react';
import _ from 'lodash';

const WheelSliceContent = ({ name, sliceContentStyle }) => (
  <div className="slice-contents" style={sliceContentStyle}>
    { _.replace(name, '_', ' ') }
  </div>
);

WheelSliceContent.propTypes = {
  name: PropTypes.string.isRequired,
  sliceContentStyle: PropTypes.shape({
    background: PropTypes.string,
    transform: PropTypes.string
  }).isRequired
};

export default WheelSliceContent;
