// http://www.codewars.com/kata/529fdef7488f509b81000061/train/javascript

var testInput = '123 456\n555 555\n123 594'

var howManyCarries = function(aString, bString){
  var index = aString.length;
  var fromPrev = 0;
  var current;
  var count = 0;

  while (index--){
    var current = Number(aString[index]) + Number(bString[index]) + fromPrev;
    count += (current > 9)? 1 : 0;
    fromPrev = (current > 9)? 1 : 0;
  }
  return count;
}

function solve(input){

  var work = input.split('\n');

  for (var i = 0; i < work.length; i++){
    work[i] = work[i].split(' ');
  }
  var preResult = [];
  for (var i = 0; i < work.length; i++){
    if (howManyCarries(work[i][0], work[i][1]) > 0){
      preResult.push(howManyCarries(work[i][0], work[i][1]).toString() + ' carry operations');
    }else {
      preResult.push('No carry operation');
    }
  }
  return preResult.join('\n');
}