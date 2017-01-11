/** Modified version of https://github.com/brigade/react-simple-pie-chart **/

import React from 'react';
import reviewTypes from '../../constants/reviewTypes';
import _ from 'lodash';
import { Paper } from 'material-ui';

class Wheel extends React.Component {

  constructor(props) {
    super(props);
    this.slices = [
      { color: '#468966', fn: this.onClickWheel.bind(this, reviewTypes.START), name: reviewTypes.START },
      { color: '#FFF0A5', fn: this.onClickWheel.bind(this, reviewTypes.MORE_OF), name: reviewTypes.MORE_OF },
      { color: '#FFB03B', fn: this.onClickWheel.bind(this, reviewTypes.LESS_OF), name: reviewTypes.LESS_OF },
      { color: '#B64926', fn: this.onClickWheel.bind(this, reviewTypes.CONTINUE), name: reviewTypes.CONTINUE },
      { color: '#8E2800', fn: this.onClickWheel.bind(this, reviewTypes.STOP), name: reviewTypes.STOP }
    ];
  }

  onClickWheel(reviewType) {
    const { selectReviewType, toggleModal } = this.props.actions;
    selectReviewType(reviewType);
    toggleModal();
  }

  getSliceStyle(index) {
    const sliceAngle = 360 / this.slices.length;
    const rotateAngle = sliceAngle * index;
    const skewYAngle = -(90 - sliceAngle);

    return {
      transform: `rotate(${rotateAngle}deg) skewY(${skewYAngle}deg)`
    }
  }

  getSliceContentStyle(slice) {
    const sliceAngle = 360 / this.slices.length;
    const rotateAngle = sliceAngle * 0.5;
    const skewYAngle = 90 - sliceAngle;

    return {
      background: slice.color,
      transform: `skewY(${skewYAngle}deg) rotate(${rotateAngle}deg)`
    }
  }

  render() {
    return (
      <div className="wheel-container">
          <ul className="wheel">
            {
              this.slices.map((slice, i) => {
                return (
                  <li key={i} className="slice" style={this.getSliceStyle(i)} onClick={slice.fn}>
                    <div className="slice-contents" style={this.getSliceContentStyle(slice)}>{_.replace(slice.name, '_', ' ')}</div>
                  </li>
                )
              })
            }
          </ul>
      </div>
    );
  }
}

Wheel.displayName = 'WheelWheel';
// Wheel.propTypes = {
//   slices: PropTypes.arrayOf(PropTypes.shape({
//     color: PropTypes.string.isRequired, // hex color
//     value: PropTypes.number.isRequired,
//   })).isRequired,
// };
Wheel.defaultProps = {};

export default Wheel;
