import React from 'react';
import { shallow } from 'enzyme';
import JoinForm from 'components/modal/login/JoinForm.js';

describe('<JoinForm />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<JoinForm />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "joinform-component"', () => {
      expect(component.hasClass('joinform-component')).to.equal(true);
    });
  });
});
