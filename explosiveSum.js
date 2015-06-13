//http://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript


function sum(num) {
  var work = [];
  for (var i = 1; i < num+1; i++){
    work.push(i);
  }
  console.log(work);
  var counter = 0;

  var recurse = function(curr){
  	if (curr === num){
  		counter++;
  		return;
  	}
  	else if (curr > num){
  		return;
  	}
  	for (var i = work.length-1; i > -1; i--){
  		recurse(curr + work[i]);
  	}
  }
  recurse(0);

  return counter;

}
