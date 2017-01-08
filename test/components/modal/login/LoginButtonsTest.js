import React from 'react';
import { shallow } from 'enzyme';
import LoginButtons from 'components/modal/login/LoginButtons.js';

describe('<LoginButtons />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<LoginButtons />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "loginbuttons-component"', () => {
      expect(component.hasClass('loginbuttons-component')).to.equal(true);
    });
  });
});
