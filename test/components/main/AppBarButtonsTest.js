import React from 'react';
import { shallow } from 'enzyme';
import AppBarButtons from 'components/main/AppBarButtons.js';

describe('<AppBarButtons />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<AppBarButtons />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "appbarbuttons-component"', () => {
      expect(component.hasClass('appbarbuttons-component')).to.equal(true);
    });
  });
});
