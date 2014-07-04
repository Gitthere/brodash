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
    input.should.deep.equal([0, 1, false, 2, '', 3]);// Work in progress, no worries yet (Alex)
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


// This method is like _.findIndex except that it iterates over 
// elements of a collection from right to left.

// If a property name is provided for callback the created "_.pluck" 
// style callback will return the property value of the given element.

// If an object is provided for callback the created "_.where" 
// style callback will return true for elements that have 
// the properties of the given object, else false.

describe("findLastIndex function", function() {
    it("should return the first element that passes the check", function() {
        var expected = [1];
        var characters = [
          { 'name': 'barney',  'age': 36, 'blocked': false },
          { 'name': 'fred',    'age': 40, 'blocked': true },
          { 'name': 'pebbles', 'age': 1,  'blocked': false }
        ];
        var result = _.findLastIndex(characters, function(chr) {
            return chr.age > 30;
        });
        result.should.equal(1);
        result.should.not.equal(2);
        result.should.not.equal(0);
    });
});


//Gets the first element or first n elements of an array. 
//If a callback is provided elements at the beginning of the 
//array are returned as long as the callback returns truey. 
//The callback is bound to thisArg and invoked with three 
//arguments; (value, index, array).

describe("first function", function() {
    it("should return the first element or n element of array", function() {
        var expected = [1];
        var input = [1, 2, 3];
        var result = _.first(input);
        result.should.equal(1);
        result.should.not.equal(2);
        result.should.not.equal(3);

    });
});

describe("first function", function() {
    it("part 2 should return the first elements of array", function() {
        var expected = [1, 2];
        var input = [[1, 2, 3], 2];
        var result = _.firstTwo(input);
        result.should.deep.equal([1, 2]);
        result.should.not.equal(3);
        result.should.not.equal(2);
        result.should.not.equal(1);
        result.should.not.equal(3, 2);
    });
});

describe("flatten function", function() {
    it("should flatten a nested array", function() {
        var expected = [1, 2, 3, 4];
        var input = [1, [2], [3, [[4]]]];
        var result = _.flatten(input, []);
        result.should.include(1, 2, 3, 4);
    });
});

describe("pull function", function() {
    it("should remove values from given array", function() {
        var expected = [1, 1];
        var input = [1, 2, 3, 1, 2, 3];
        var result = _.pull(input);
        result.should.deep.equal([1, 1]);
        
    });
});


