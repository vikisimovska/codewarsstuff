// http://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
  var work = [x];
  var temp;
  while (work.length < n){
    temp = work[work.length-1] * work[work.length-1];
    work.push(temp);
  }
  return work;
}