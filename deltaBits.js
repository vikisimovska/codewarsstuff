// http://www.codewars.com/kata/538948d4daea7dc4d200023f/train/javascript

var twos = function(n, input) {
  //You may assume for this excercise that  n >= 2... 
  var work = input.toString(2);
  var work2 = ""
  var result;
  for (var i = 0; i < work.length; i++){
    if (work[i] === "-"){
      work2 += "1";
    }
    else {
      work2 += work[i];
    }
  }
  if (work2.length >= n){
    return work2.slice(work2.length-n, work2.length);
  }
  else {
    if (work[0] === "-"){
      while (work2.length < n){
        work2 = "1" + work2;
      }
    }
    else {
      while (work2.length < n){
        work2 = "0" + work2;
      }
    }
    return work2;
  }
}

function convertBits(a, b){

  var workA = twos(50, a);
  var workB = twos(50, b);

  var counter = 0; 

  for (var i = 0; i < workA.length; i++){
    if (workA[i] !== workB[i]){
      counter++;
    }
  }

  return counter;
}