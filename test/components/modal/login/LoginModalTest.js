import React from 'react';
import { shallow, mount } from 'enzyme';
import firebase from 'firebase';
import config from 'config'
import * as helpers from 'helpers/firebase';
import { Accordion, Panel } from 'react-bootstrap';
import LoginModal from 'components/modal/login/LoginModal.js';
import JoinForm from 'components/modal/login/JoinForm.js';
import CreateForm from 'components/modal/login/CreateForm.js';

import chai, { should, expect } from 'chai'
import spies from 'chai-spies'
chai.use(spies);

describe('<LoginModal />', () => {

  let component;
  let loginModal;
  let mockProps;
  let mockEvent;

  //redo
  // describe('when rendering the component', () => {
  //
  //   beforeEach(() => {
  //     component = mount(<LoginModal/>)
  //   });
  //
  //   it('should contain an <Accordion /> component', () => {
  //     expect(component.find(Accordion)).to.have.length(1);
  //   });
  //
  //   it('should contain 2x <Panel /> components', () => {
  //     expect(component.find(Panel)).to.have.length(2);
  //   });
  //
  //   it('should contain <JoinForm /> component', () => {
  //     expect(component.find(JoinForm)).to.have.length(1);
  //   });
  //
  //   it('should contain <CreateForm /> component', () => {
  //     expect(component.find(CreateForm)).to.have.length(1);
  //   });
  //
  // });

  describe('submitRoomDetails', () => {
    firebase.initializeApp(config.firebaseCfg);

    beforeEach(() => {
      mockProps = {
        actions: { updateRoomId: key => key },
        toggleModal: () => {},
        updateIsLogin: () => {}
      };
      mockEvent = {
        preventDefault: () => {}
      };
      chai.spy.on(mockProps.actions, 'updateRoomId');
      chai.spy.on(mockProps, 'toggleModal');
      chai.spy.on(mockProps, 'updateIsLogin');
      chai.spy.on(mockEvent, 'preventDefault');
      chai.spy.on(helpers, 'dbWrite');
      loginModal = new LoginModal(mockProps);
      loginModal.submitRoomDetails(mockEvent);
    });

    it('should call e.preventDefault', () => {
      expect(mockEvent.preventDefault).to.have.been.called();
    });

    it('should call dbWrite', () => {
      expect(helpers.dbWrite).to.have.been.called.with('rooms', { name: 'TEST' });
    });

    it('should call this.props.actions.updateRoomId', () => {
      expect(mockProps.actions.updateRoomId).to.have.been.called();
    });

    it('should call this.props.updateIsLogin', () => {
      expect(mockProps.updateIsLogin).to.have.been.called.with(false);
    });

    it('should call this.props.toggleModal', () => {
      expect(mockProps.toggleModal).to.have.been.called();
    });

  })

});
