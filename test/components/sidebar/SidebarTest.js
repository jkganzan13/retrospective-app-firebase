import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from 'components/sidebar/Sidebar.js';

describe('<Sidebar />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Sidebar />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "sidebar-component"', () => {
      expect(component.hasClass('sidebar-component')).to.equal(true);
    });
  });
});
