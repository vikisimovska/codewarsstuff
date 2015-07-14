// http://www.codewars.com/kata/54b679eaac3d54e6ca0008c9/train/javascript

var createIterator = function (func, n) {
  // TODO: Write code here to return a function 
  // that executes *func*, *n* times on a supplied input
  var previous;

  return function(){
    if (previous !== undefined){
      var toRun = arguments[0];
      previous = func.apply(this, toRun);
      return previous;
    }
    else {
      previous = func.apply(this, [previous]);
      return previous;
    }
  }
};