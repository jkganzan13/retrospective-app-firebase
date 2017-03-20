import React from 'react';
import { shallow } from 'enzyme';
import UsersList from 'components\sidebar\users\UsersList.js';

describe('<UsersList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<UsersList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "userslist-component"', function () {
      expect(component.hasClass('userslist-component')).to.equal(true);
    });
  });
});
