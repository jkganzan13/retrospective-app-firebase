import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from 'components/modal/login/LoginForm.js';

describe('<LoginForm />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<LoginForm />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "loginform-component"', () => {
      expect(component.hasClass('loginform-component')).to.equal(true);
    });
  });
});
