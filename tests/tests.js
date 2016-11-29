

var chai = require('chai');
var assert = chai.assert;

var myApp = require('../app/library.js');

describe("Return a list of prime numbers", function() {
  it("should return [2, 3, 5] for 5", function() {
    assert.deepEqual(myApp.getPrimes(5), [2, 3, 5]);
  })
  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 25", function() {
    assert.deepEqual(myApp.getPrimes(25), [2, 3, 5, 7, 11, 13, 17, 19, 23]);
  })
  it("should return [2, 3, 5, 7, 11] for 11", function(){
    assert.deepEqual(myApp.getPrimes(11), [2, 3, 5, 7, 11]);
  })
  it("should return 'no value' for 0", function() {
    assert(myApp.getPrimes(0) === ('no value'));
  })
  it("should return 'no value' for null", function(){
    assert(myApp.getPrimes(null) === ('no value'));
  })
  it("should return 'undefined' for (typeof(n) !== 'number')", function(){
    assert(myApp.getPrimes('blue') === ('undefined'));
  })
})