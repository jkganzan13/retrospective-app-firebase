import React from 'react';
import { shallow } from 'enzyme';
import ReviewsList from 'components/sidebar/ReviewsList.js';

describe('<ReviewsList />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<ReviewsList />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "reviewslist-component"', () => {
      expect(component.hasClass('reviewslist-component')).to.equal(true);
    });
  });
});
