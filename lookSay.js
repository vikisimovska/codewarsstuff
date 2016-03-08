// http://www.codewars.com/kata/530045e3c7c0f4d3420001af/train/javascript

function lookSay(number){
  var work = number.toString();
  var pointer = 1;
  var current = work[0];
  var result = [];
  var count = 1;

  while (pointer < work.length){
    if (work[pointer] !== current){
      result.push(count, current);
      current = work[pointer];
      count = 1;
    } else {
      count++;
    }
    pointer++;
  }

  result.push(count, current);
  return parseInt(result.join(''));
}


console.log(lookSay(1211));
