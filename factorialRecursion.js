// http://www.codewars.com/kata/5500517fc50295fff2000423/train/javascript

function factorial(num){
  var work = 1;

  var recurse = function(toMultiply){
    if (toMultiply === 1){
      return;
    }
    work *= toMultiply;
    recurse(toMultiply-1);
  }
  recurse(num)
  return work;
}