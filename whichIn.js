//http://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1,array2){
  var result = [];
  array1.map(function(value1){
    array2.map(function(value2){
      if (value2.indexOf(value1) > -1 && result.indexOf(value1) === -1){
        result.push(value1);
      }
    })
  })
  return result.sort();
}