import React from 'react';
import { shallow } from 'enzyme';
import CreateForm from 'components/modal/login/CreateForm.js';

describe('<CreateForm />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<CreateForm />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "createform-component"', () => {
      expect(component.hasClass('createform-component')).to.equal(true);
    });
  });
});
