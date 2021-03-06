/**
 * Testing
 * @ndaidong
 */

const test = require('tap').test;

const AverageRating = require('../../../index');

const samples = require('../samples');

test('Testing "average" method', (assert) => {
  samples.forEach((sample) => {
    let rating = sample.rating;
    let expect = sample.expect.average;
    let actual = Number(AverageRating.average(rating));
    let s = rating.join(', ');
    assert.deepEqual(actual, expect, `.average([${s}]) should be ${expect}`);
  });

  assert.end();
});
