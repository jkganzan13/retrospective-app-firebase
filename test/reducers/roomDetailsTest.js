var reducer = require('../../src/reducers/roomDetails');
var actions = require('../../src/actions/const');
var _ = require('lodash');

describe('roomDetails', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });


  describe('UPDATE_ROOM_ID', () => {

    it('should update state.roomId by action.roomId', () => {
      const state = Object.freeze({ roomId: '' });
      let newState = reducer(state, { type: actions.UPDATE_ROOM_ID, roomId: 123 });
      expect(_.isEqual(newState,{roomId: 123})).to.equal(true);
    });
    it('should return an object', () => {
      const state = Object.freeze({ roomId: '' });
      let newState = reducer(state, { type: actions.UPDATE_ROOM_ID, roomId: 123 });
      expect(newState).to.be.an('object');
    });

  });

});
