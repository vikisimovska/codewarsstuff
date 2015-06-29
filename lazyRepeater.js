// http://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

function makeLooper(str) {
  // TODO: return a function that loops through 'str' on successive invocations
  var strLength = str.length;
  var counter = (counter)? counter : 0;

  var inner = function(){
    var counter = (counter)? counter : 0;
    return str[counter % strLength];
    counter++;
  }

  return inner;
}

