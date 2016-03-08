//http://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod){
  var work = [0, 1];

  while (work[0] * work[1] < prod){
    var temp = work[0] + work[1];
    work[0] = work[1];
    work[1] = temp;
  }
  return (work[0] * work[1] === prod)? work.concat(true) : work.concat(false);
}