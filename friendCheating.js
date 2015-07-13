// http://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript

var sumFromOneToN = function(n, remove1, remove2){
  var work = 0;
  for (var i = 1; i < n+1; i++){
    if (i !== remove1 && i !== remove2){
      work += i;
    }
  }
  return work;
}

function removeNb (n) {
  console.log(n);
  var limit = sumFromOneToN(n);
  var work = [];
  for (var i = 1; i < n; i++){
    for (var j = i+1; j < n+1; j++){
      if (i*j > limit){
        break;
      }
      if (sumFromOneToN(n, i, j) === i * j){
        work.push([i, j]);
        work.push([j, i]);
      }
    }
  }
  return work;
}