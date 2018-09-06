const { assert, refute } = require('referee');
const { describe, it } = require('mocha');

describe('Canary', () => {
  it('should still breathe', () => {
    assert(true);
  });

  it(`shouldn't be dead`, () => {
    refute(false);
  });
});
