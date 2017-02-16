import React from 'react';
import { shallow } from 'enzyme';
import WheelSliceContent from 'components/wheel/WheelSliceContent.js';

describe('<WheelSliceContent />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<WheelSliceContent />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "wheelslicecontent-component"', () => {
      expect(component.hasClass('wheelslicecontent-component')).to.equal(true);
    });
  });
});
