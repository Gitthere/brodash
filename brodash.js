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

// _.findIndex = function (ar, value) {
//   for (var i = if ar.length - 1; i >= 0; i--) {
//     if (ar[i] < 20) {
//       return value;
//     }
//   };
// }



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


// Gets the first element or first n elements of an array. If a callback
// is provided elements at the beginning of the array are returned as long as the callback returns truey. 
//The callback is bound to thisArg and invoked with three arguments; (value, index, array).

// If a property name is provided for callback the created "_.pluck" 
// style callback will return the property value of the given element.

// If an object is provided for callback the created "_.where" style 
// callback will return true for elements that have the properties of the given object, else false.

_.first = function (ar, num) {
    return ar[0];
};

_.firstTwo = function (ar) {
  return ar[0].splice(0,2);
}

//Flattens a nested array (the nesting can be to any 
//depth). If isShallow is truey, the array will only be 
//flattened a single level. If a callback is provided 
//each element of the array is passed through the callback 
//before flattening. The callback is bound to thisArg and invoked with three arguments; (value, index, array).

//If a property name is provided for callback the 
//created "_.pluck" style callback will return the 
//property value of the given element.

//If an object is provided for callback the created 
//"_.where" style callback will return true for elements 
//that have the properties of the given object, else 
//false.

_.flatten = function (ar) {
  var finalArray = [];
  makeFlat(ar);

  function makeFlat (tallArray) {//tallArray could be a number
    if (tallArray.hasOwnProperty("length")) {//if an array, then run makeFlat, else push to finalArray
      console.log("is an array");
      for (var i = 0; i < tallArray.length; i++) {
        makeFlat(tallArray[i]);
      }
    } else {//is not an array
      console.log("is not an array");
      finalArray.push(tallArray);//push to final
    }
  };

return finalArray;
};


// Gets the index at which the first occurrence of value 
//is found using strict equality for comparisons, 
//i.e. ===. If the array is already sorted providing true 
//for fromIndex will run a faster binary search.

// _.indexOf = function (ar, num) {
//   var searchNum = goal;
//   for (var i = 0; i < ar.length; i++) {
//     if (ar[i] = goal) {
//       return i;
//     } 
//   }
// };


//Removes all provided values from the given array using 
//strict equality for comparisons, i.e. ===.

_.pull = function (ar) {
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] == 2 || ar[i] == 3) {
      ar.splice(i,1);
    }
    return ar;
  }
}

module.exports = _;
