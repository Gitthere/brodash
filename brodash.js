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


// Creates an array with all falsey values removed. The values 
// false, null, 0, "", undefined, and NaN are all falsey.

_.difference = function (ar) {
//   for (var i = ar.length - 1; i >= 0; i--) {
//     if (ar[i] == false) {
//       ar.splice(i,1);
//     };
//   };
// return [1, 3, 4]; //stub return
}

module.exports = _;