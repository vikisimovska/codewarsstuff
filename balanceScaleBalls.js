// http://www.codewars.com/kata/544034f426bc6adda200000e/train/javascript

function findBall(scales) {
  var first = scales.getWeight([1, 2, 3], [4, 5, 6]);

  if (first === 0){
    if (scales.getWeight([0], [7]) === -1){
      return 0;
    }
    else {
      return 7;
    }
  }
  else if (first === -1){
    var temp = scales.getWeight([1], [2]);
    if (temp === 0){
      return 3;
    }
    else if (temp === -1){
      return 1;
    }
    else {
      return 2;
    }
  }
  else {
    var temp = scales.getWeight([4], [5]);
    if (temp === 0){
      return 6;
    }
    else if(temp === -1){
      return 4;
    }
    else {
      return 5;
    }
  }
}