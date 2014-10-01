'use strict';

describe('videogularQuizExample.version module', function() {
  beforeEach(module('videogularQuizExample.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
