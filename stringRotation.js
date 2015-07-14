// http://www.codewars.com/kata/5596f6e9529e9ab6fb000014/train/javascript

var moveBack = function(input){
  input = input.split('');
  var result = input.slice(1).concat(input.slice(0, 1));
  return result.join('');;
}

function shiftedDiff(first,second){
  var limit = second.length;
  var count = 0;
  while (first !== second){
    second = moveBack(second);
    count++;
    if (count > limit){
      return -1;
    }
  }
  return count;
}