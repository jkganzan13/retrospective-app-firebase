import React from 'react';
import { shallow } from 'enzyme';
import SessionDetails from 'components/sidebar/SessionDetails.js';

describe('<RoomDetails />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<SessionDetails />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "roomdetails-component"', () => {
      expect(component.hasClass('roomdetails-component')).to.equal(true);
    });
  });
});
