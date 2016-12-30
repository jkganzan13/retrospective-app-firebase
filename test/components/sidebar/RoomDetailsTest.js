import React from 'react';
import { shallow } from 'enzyme';
import RoomDetails from 'components/sidebar/RoomDetails.js';

describe('<RoomDetails />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<RoomDetails />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "roomdetails-component"', () => {
      expect(component.hasClass('roomdetails-component')).to.equal(true);
    });
  });
});
