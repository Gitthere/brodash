// utility functions
var _ = {};


// Creates an array with all falsey values removed. The values 
// false, null, 0, "", undefined, and NaN are all falsey.

_.compact = function (ar) { 
    var output = [];
    for (var i = ar.length - 1; i >= 0; i--) {  
      if (ar[i] !== 0 && ar[i] !== false && ar[i] !== '') {
        output.push(ar[i]);
      }
    }
  return output;
}

// Creates an array excluding all values of the 
// provided arrays using strict equality for 
// comparisons, i.e. ===.


_.difference = function (ar, value) {
  for (var i = ar.length - 1; i >= 0; i--) {
    console.log("i is at " + i);
    for (var j = value.length - 1; j >= 0; j--) {
      console.log("j is at " + j);
      if (ar[i] === value[j]) {
        console.log("match found")
        ar.splice(i,1);
      };
    };
  };
  return ar;
};

// This method is like _.find except that it returns 
//the index of the first element that passes the callback check, 
//instead of the element itself.

// If a property name is provided for callback the created "_.pluck" 
//style callback will return the property value of the given element.

// If an object is provided for callback the created "_.where" 
//style callback will return true for elements that have the 
//properties of the given object, else false.



module.exports = _;