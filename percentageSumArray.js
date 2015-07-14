// http://www.codewars.com/kata/55142efb1d1eb59512000002/train/javascript

function percentageSumArray(arr){
  var percentage = arr.length; 
  if (percentage === 0){
    return false;
  }
  percentage = percentage / 100;
  var sumOfArray = arr.reduce(function(prev, curr){return prev + curr});
  var result = percentage * sumOfArray;
  return result.toFixed(2);
}