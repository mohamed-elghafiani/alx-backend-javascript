const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('sums two positive numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('sums a number with a decimal and a whole number', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('sums two decimals', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounds 1.5 and 3.7 to the nearest integers and sums them', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('handles negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.2, 2.5), 2);
  });

  it('handles zero as an input', function() {
    assert.strictEqual(calculateNumber(0, 2.5), 3);
  });

  it('sums negative and positive numbers', function() {
    assert.strictEqual(calculateNumber(-1.5, 0), -1);
  });

  it('rounds numbers at 0.5 up to the nearest integer', function() {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('tests rounding at decimal boundaries', function() {
    assert.strictEqual(calculateNumber(1.49, 2.51), 4);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('tests rounding when both numbers are decimals close to the rounding threshold', function() {
    assert.strictEqual(calculateNumber(1.7, 2.8), 5);
  });

  it('tests with identical decimal values', function() {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });
});
