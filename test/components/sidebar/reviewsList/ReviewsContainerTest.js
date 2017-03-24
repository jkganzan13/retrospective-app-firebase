import React from 'react';
import { shallow } from 'enzyme';
import ReviewsContainer from 'components\sidebar\reviewsList\ReviewsContainer.js';

describe('<ReviewsContainer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ReviewsContainer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "reviewscontainer-component"', function () {
      expect(component.hasClass('reviewscontainer-component')).to.equal(true);
    });
  });
});
