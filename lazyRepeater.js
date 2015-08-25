function makeLooper(str) {
  var work = str;
  var counter = 0;

  var runThrough = function(){
    var result = work[counter];
    counter++;
    if (counter === work.length){
      counter = 0;
    }
    return result;
  }

  return runThrough;
}