var chai = require('chai'),
    should = chai.should(),
    _ = require('../brodash.js');

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are all falsey.
// Write test for new array
// Refactor code so it passes the below test

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
    // input.should.equal[0, 1, false, 2, '', 3];// Work in progress, no worries yet (Alex)
  });
});


//Creates an array excluding all values of the 
//provided arrays using strict equality for comparisons, i.e. ===.

describe("Difference function", function() {
  it("should output differences of two arrays", function() {
    var expected = [1, 3, 4];
    var parameter1 = [1, 2, 3, 4, 5];
    var parameter2 = [5, 2, 10];
    var result = _.difference(parameter1, parameter2);
    result.should.include(1);
    result.should.include(3);
    result.should.include(4);
    result.should.not.include(5);
    result.should.not.include(2);
    result.should.not.include(10);
  });
});


//This method is like _.find except that it returns the index 
//of the first element that passes the callback check, instead of the element itself.

describe("Findindex function", function() {
    it("should return the first element that passes the check", function() {
        var expected = [2];
        var characters = [
          { 'name': 'barney',  'age': 36, 'blocked': false },
          { 'name': 'fred',    'age': 40, 'blocked': true },
          { 'name': 'pebbles', 'age': 1,  'blocked': false }
        ];
        var result = _.findIndex(characters, function(chr) {
            return chr.age < 20;
        });
        result.should.equal(2);
        result.should.not.equal(0);
        result.should.not.equal(1);
    });
});




