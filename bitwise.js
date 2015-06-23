//http://www.codewars.com/kata/523fba59cb9aaaef4f000135/train/javascript

Number.prototype.twos = function(n) {
  //You may assume for this excercise that  n >= 2... 
  var work = this.toString(2);
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

