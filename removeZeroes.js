var flip = function(array, i){
  var temp = array[i];
  array[i] = array[i+1];
  array[i+1] = temp;
  return array;
}

var sendToEnd = function(array, i){
  for (var i = i; i < array.length-1; i++){
    flip(array, i);
  }
  return array;
}

function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.

  var count = 0; 
  for (var i = 0; i < array.length; i++){
    (array[i] === 0 || array[i] === "0") && count++;
  }

  while (count--){
    for (var i = 0; i < array.length; i++){
      if (array[i] === 0 || array[i] === "0"){
        sendToEnd(array, i);
        break;
      }
    }
  }

  return array;
}

// sendToEnd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);