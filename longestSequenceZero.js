// http://www.codewars.com/kata/52b4d1be990d6a2dac0002ab/train/javascript

var sumArrayValues = function(arr){
  return arr.reduce(function(prev, curr){return prev + curr});
}

var maxZeroSequence = function(arr) {
  console.log(arr);
  var work = [];
  for (var i = 0; i < arr.length-1; i++){
    for (var j = i+2; j < arr.length+1; j++){
      if (sumArrayValues(arr.slice(i, j)) === 0 && arr.slice(i, j).length > work.length){
        work = arr.slice(i, j);
      }
    }
  }
  return work;
}