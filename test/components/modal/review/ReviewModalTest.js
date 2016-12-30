import React from 'react';
import { shallow } from 'enzyme';
import ReviewModal from 'components/modal/review/ReviewModal.js';

describe('<ReviewModal />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<ReviewModal />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "reviewmodal-component"', () => {
      expect(component.hasClass('reviewmodal-component')).to.equal(true);
    });
  });
});
