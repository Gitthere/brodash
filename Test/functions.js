var chai = require('chai'),
    should = chai.should(),
    _ = require('../brodash.js');

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are all falsey.

describe("Compact function", function() {
  it("should compact an Array", function() {
    var expected = [1, 2, 3];
    var input = [0, 1, false, 2, '', 3]; 
    var result = _.compact(input);
    result.should.include(1);
    result.should.include(2);
    result.should.include(3);
    result.should.not.include(0);
    result.should.not.include(false);
    result.should.not.include('');
  });
});


//Creates an array excluding all values of the 
//provided arrays using strict equality for comparisons, i.e. ===.

describe("Difference function", function() {
  it("should output differences of two arrays", function() {
    var expected = [1, 3, 4];
    var parameter1 = [1, 2, 3, 4, 5];
    var parameter2 = [5, 2, 10];
    var result = _.difference(input);
    result.should.include(1);
    result.should.include(3);
    result.should.include(4);
    result.should.not.include(5);
    result.should.not.include(2);
    result.should.not.include(10);
  });
});