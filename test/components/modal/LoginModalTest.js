import React from 'react';
import { shallow } from 'enzyme';
import LoginModal from 'components/modal/LoginModal.js';

describe('<LoginModal />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<LoginModal />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "loginmodal-component"', () => {
      expect(component.hasClass('loginmodal-component')).to.equal(true);
    });
  });
});
