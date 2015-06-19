//http://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

function nthFibo(n) {
  n--
  var work = [0, 1];
  var temp;

  while (n--){
    temp = work[0];
    work[0] = work[1];
    work[1] = temp + work[0];
  }
  return work[0];
}

nthFibo(4);
