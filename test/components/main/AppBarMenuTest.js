import React from 'react';
import { shallow } from 'enzyme';
import AppBarMenu from 'components/main/AppBarMenu.js';

describe('<AppBarMenu />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<AppBarMenu />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "appbarmenu-component"', () => {
      expect(component.hasClass('appbarmenu-component')).to.equal(true);
    });
  });
});
