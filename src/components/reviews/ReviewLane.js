import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';
import Card from './ReviewCards';

const style = {
  width:216,
  display: 'inline-block'
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      reviews: [...props.reviews],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      reviews: [...nextProps.reviews]
    });
  }

  moveCard(dragIndex, hoverIndex) {
    const { reviews } = this.state;
    const dragCard = reviews[dragIndex];

    this.setState(update(this.state, {
      reviews: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className="reviews__lane" style={style}>
        <div className="reviews__header">
          {this.props.reviewType}
        </div>
        <div className="reviews__card-container">
          {
            reviews.map((review, i) => (
              <Card
                key={review.timestamp}
                index={i}
                review={review}
                moveCard={this.moveCard}
              />
            ))
          }
        </div>

      </div>
    );
  }
}

Container.propTypes = {
  reviewType: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default Container;
