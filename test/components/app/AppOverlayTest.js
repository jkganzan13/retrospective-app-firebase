import React from 'react';
import { shallow } from 'enzyme';
import AppOverlay from 'components\app\AppOverlay.js';

describe('<AppOverlay />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<AppOverlay />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "appoverlay-component"', function () {
      expect(component.hasClass('appoverlay-component')).to.equal(true);
    });
  });
});
