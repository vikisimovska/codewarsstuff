// http://www.codewars.com/kata/52250aca906b0c28f80003a1/train/javascript

var input = ['a','a','b','b','c','a','b','c'];

function uniq_c(a){
  var prev = '';
  var result = [];
  var current = [];
  for (var i = 0; i < a.length; i++){
    if (a[i] !== prev){
      result.push(current.slice());
      prev = a[i];
      current = [a[i], 1];
    }
    else {
      current[1] = current[1] + 1;
    }
  }
  result.push(current.slice());
  result.shift();
  return result;
}
