import React from 'react';
import { shallow } from 'enzyme';
import ReviewsList from 'components\sidebar\reviews\ReviewsList.js';

describe('<ReviewsList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ReviewsList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "reviewslist-component"', function () {
      expect(component.hasClass('reviewslist-component')).to.equal(true);
    });
  });
});
