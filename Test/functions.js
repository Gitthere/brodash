var chai = require('chai'),
    should = chai.should(),
    _ = require('../brodash.js');

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are all falsey.

describe("Array function", function() {
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
