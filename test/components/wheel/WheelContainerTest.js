import React from 'react';
import { shallow } from 'enzyme';
import WheelContainer from 'components\wheel\WheelContainer.js';

describe('<WheelContainer />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<WheelContainer />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "wheelcontainer-component"', function () {
      expect(component.hasClass('wheelcontainer-component')).to.equal(true);
    });
  });
});
