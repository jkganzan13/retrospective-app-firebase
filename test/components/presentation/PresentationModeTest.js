import React from 'react';
import { shallow } from 'enzyme';
import PresentationMode from 'components\presentation\PresentationMode.js';

describe('<PresentationMode />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<PresentationMode />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "presentationmode-component"', function () {
      expect(component.hasClass('presentationmode-component')).to.equal(true);
    });
  });
});
