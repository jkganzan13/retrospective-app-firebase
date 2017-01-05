var util = require('../../src/helpers/util');

describe('util.js', () => {

  describe('sanitizeText', () => {

    it('should return string', () => {
      let str = ' test ';
      let result = util.sanitizeText(str);
      expect(result).to.be.a('string');
    });

    it('should remove trailing white space from string', () => {
      let str = '   test';
      let result = util.sanitizeText(str);
      expect(result).to.equal('test');
    });

    it('should remove leading white space from string', () => {
      let str = 'test   ';
      let result = util.sanitizeText(str);
      expect(result).to.equal('test');
    });

  });

  describe('getTimestamp', () => {

    it('should return number', () => {
      let result = util.getTimestamp();
      expect(result).to.be.a('number');
    });

    it('should return current time', () => {
      let result = util.getTimestamp();
      let expected = new Date().getTime();
      expect(result).to.equal(expected);
    });

  });

  describe('isValidString', () => {
    it('should return boolean', () => {
      let result = util.isValidString('test');
      expect(result).to.be.a('boolean');
    });
    it('should return true if input is not empty', () => {
      let result = util.isValidString('test');
      expect(result).to.equal(true);
    });
    it('should return false if input is null, undefined, empty or filled with whitespace', () => {
      let result = util.isValidString('');
      expect(result).to.equal(false);
      result = util.isValidString(null);
      expect(result).to.equal(false);
      result = util.isValidString(undefined);
      expect(result).to.equal(false);
      result = util.isValidString('    ');
      expect(result).to.equal(false);
    });
  })

});
