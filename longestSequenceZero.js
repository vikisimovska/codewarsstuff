// http://www.codewars.com/kata/52b4d1be990d6a2dac0002ab/train/javascript

var sumArrayValues = function(arr){
  return arr.reduce(function(prev, curr){return prev + curr});
}

var maxZeroSequence = function(arr) {
  var work = [];
  var count;
  for (var i = 0; i < arr.length-1; i++){
    count = 0;
    for (var j = i+1; j < arr.length; j++){
      count += arr[j];
      if (count === 0){
        if (arr.slice(i, j+1).length > work.length){
          work = arr.slice(i, j+1);
        }
      }
    }
  }
  return work;
}