import React from 'react';
import { shallow } from 'enzyme';
import WheelSlice from 'components/wheel/WheelSlice.js';

describe('<WheelSlice />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<WheelSlice />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "wheelslice-component"', () => {
      expect(component.hasClass('wheelslice-component')).to.equal(true);
    });
  });
});
