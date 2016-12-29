import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'components/modal/Modal.js';

describe('<Modal />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Modal />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "modal-component"', () => {
      expect(component.hasClass('modal-component')).to.equal(true);
    });
  });
});
