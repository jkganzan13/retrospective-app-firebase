import React from 'react';
import { shallow } from 'enzyme';
import Wheel from 'components/wheel/Wheel.js';

describe('<Wheel />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Wheel />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "wheel-component"', () => {
      expect(component.hasClass('wheel-component')).to.equal(true);
    });
  });
});
