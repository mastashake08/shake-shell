const assert = require('assert');
const main = require('..');

describe('shake-shell', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'shake-shell');
  });
});
