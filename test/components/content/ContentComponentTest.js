import React from 'react';
import { shallow } from 'enzyme';
import ContentComponent from 'components\content\ContentComponent.js';

describe('<ContentComponent />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ContentComponent />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "contentcomponent-component"', function () {
      expect(component.hasClass('contentcomponent-component')).to.equal(true);
    });
  });
});
