// http://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript

var isPrime = function(input){
  var root = Math.sqrt(input) + 1;
  var check = true;

  if (input === 1){
    return false;
  }
  else if (input === 2){
    return true;
  }

  for (var i = 2; i < root; i++){
    if (input % i === 0){
      check = false;
    }
  }
  return check;
}

isPrime(2);

var getPrimesBelow = function(input){
  var work = [];

  for (var i = 2; i < input + 1; i++){
    if (isPrime(i) && input % i === 0){
      work.push(i);
    }
  }
  return work;
}

function sumOfDivided(lst) {
  //your code
  console.log("INPUT LIST: ", lst);
  var work = {};
  for (var i = 0; i < lst.length; i++){
    var current = getPrimesBelow(Math.abs(lst[i]));
    for (var j = 0; j < current.length; j++){
      if (work[current[j]] === undefined){
        work[current[j]] = lst[i];
      }
      else {
        work[current[j]] = work[current[j]] + lst[i];
      }
    }
  }

  var result = [];
  for (var key in work){
    var current = [Number(key), work[key]];
    result.push(current);
  }
  console.log("THE RESULT: ", result);
  return result;
}