// https://projecteuler.net/problem=15


var run = function(n){
  var work = [1];
  while (work.length < n + 1){
    var temp = 1;
    for (var i = 1; i < work.length; i++){
      temp = temp + work[i];
      work[i] = temp;
    }
    work.push(2*temp);
  }
  return  work[work.length-1];
}


console.time('runTime: ');
run(20);
console.timeEnd('runTime: ');