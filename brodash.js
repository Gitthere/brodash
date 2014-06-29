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


module.exports = _;


_.findIndex = function (ar, callback) {
  for (var i = 0; i < ar.length; i++) {
    var callback_result = callback(ar[i]); 
    if (callback_result === true){
      return i;
    }
  }
};

_.findLastIndex = function (ar, callback) {
  for (var i = ar.length - 1; i >= 0; i--) {
    var callback_result = callback(ar[i]);
    if (callback_result === true){
      return i;
    }
  }
};