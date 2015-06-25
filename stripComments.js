// http://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

function solution(input, markers){
  var work = input.split('\n');

  var preResult = [];
  for (var i = 0; i < work.length; i++){
    var current = "";
    for (var j = 0; j < work[i].length; j++){
      if (markers.indexOf(work[i][j]) > -1){
        break;
      }
      current += work[i][j];
    }
    while (current[current.length-1] === " "){
      current = current.split('')
      current.pop()
      current = current.join('');
    }
    preResult.push(current);
  }
  return preResult.join('\n');
}