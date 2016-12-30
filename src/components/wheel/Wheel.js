/** Modified version of https://github.com/brigade/react-simple-pie-chart **/

import React from 'react';
import reviewTypes from '../../constants/reviewTypes';

const { PropTypes } = React;
const size = 100;
const radCircumference = Math.PI * 2;
const center = size / 2;
const radius = center - 1; // padding to prevent clipping

/**
 * @param {Object[]} slices
 * @return {Object[]}
 */
function renderPaths(slices) {
  const total = slices.reduce((totalValue, { value }) => totalValue + value, 0);

  let radSegment = 0;
  let lastX = radius;
  let lastY = 0;

  return slices.map(({ color, value, fn }, index) => {
    // Should we just draw a circle?
    if (value === total) {
      return (
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill={color}
          key={index}
        />
      );
    }

    if (value === 0) {
      return;
    }

    const valuePercentage = value / total;

    // Should the arc go the long way round?
    const longArc = (valuePercentage <= 0.5) ? 0 : 1;

    radSegment += valuePercentage * radCircumference;
    const nextX = Math.cos(radSegment) * radius;
    const nextY = Math.sin(radSegment) * radius;

    // d is a string that describes the path of the slice.
    // The weirdly placed minus signs [eg, (-(lastY))] are due to the fact
    // that our calculations are for a graph with positive Y values going up,
    // but on the screen positive Y values go down.
    const d = [
      `M ${center},${center}`,
      `l ${lastX},${-lastY}`,
      `a${radius},${radius}`,
      '0',
      `${longArc},0`,
      `${nextX - lastX},${-(nextY - lastY)}`,
      'z',
    ].join(' ');

    lastX = nextX;
    lastY = nextY;

    return <path d={d} fill={color} key={index} onClick={fn} />;
  });
}

/**
 * Generates an SVG pie chart.
 * @see {http://wiki.scribus.net/canvas/Making_a_Pie_Chart}
 */
class Wheel extends React.Component {
  /**
   * @return {Object}
   */
  constructor(props) {
    super(props);
    this.slices = [
      { color: '#468966', value: 20, fn: this.onClickWheel.bind(this, reviewTypes.START) },
      { color: '#FFF0A5', value: 20, fn: this.onClickWheel.bind(this, reviewTypes.MORE_OF) },
      { color: '#FFB03B', value: 20, fn: this.onClickWheel.bind(this, reviewTypes.LESS_OF) },
      { color: '#B64926', value: 20, fn: this.onClickWheel.bind(this, reviewTypes.CONTINUE) },
      { color: '#8E2800', value: 20, fn: this.onClickWheel.bind(this, reviewTypes.STOP) }
    ];
  }

  onClickWheel(reviewType) {
    const { selectReviewType, toggleModal } = this.props.actions;
    selectReviewType(reviewType);
    toggleModal();
  }

  render() {
    return (
      <div id="pie">
        <svg viewBox={`0 0 ${size} ${size}`}>
          <g transform={`rotate(-90 ${center} ${center})`}>
            {renderPaths(this.slices)}
            <filter id="blur-filter" x="-1" y="-1" width="200" height="200">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            </filter>
          </g>
        </svg>
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
