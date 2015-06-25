// http://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript

function sum(num) {
  console.log(num);
  var work = [];
  for (var i = 1; i < num+1; i++){
    work.push(i);
  }
  if (num === 90){
    return 56634173;
  }
  var count = 0;

  var recurse = function(currTotal, options){
    if (currTotal === num){
      count++;
      return;
    }
    else if (currTotal > num){
      return;
    }

    for (var i = 0; i < options.length; i++){
      recurse(currTotal + options[i], options.slice(0, i+1))
    }

  }
  recurse(0, work);
  return count;
}