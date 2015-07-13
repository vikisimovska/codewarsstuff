// http://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript

function listToArray(list) {
  var current = list
  var work = [];
  while (current !== null){
    work.push(current.value);
    current = current.rest;
  }
  return work;
}