/** Modified version of https://github.com/brigade/react-simple-pie-chart **/

import React from 'react';
import { modalTypes, reviewTypes } from '../../constants';
import WheelSlice from './WheelSlice';

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
    const { showModal, updateKeyToEdit } = this.props.actions;
    updateKeyToEdit('');
    showModal(modalTypes.REVIEW, reviewType);
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
        <div className="wheel-content">
          <ul className="wheel">
            {
              this.slices.map((slice, i) =>
                <WheelSlice
                  key={i}
                  name={slice.name}
                  onClick={slice.fn}
                  sliceStyle={this.getSliceStyle(i)}
                  sliceContentStyle={this.getSliceContentStyle(slice)}
                />
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

Wheel.displayName = 'WheelWheel';
Wheel.defaultProps = {};

export default Wheel;
