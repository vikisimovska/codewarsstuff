// http://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

function makeLooper(str) {
  // TODO: return a function that loops through 'str' on successive invocations
  this.work = str;
  this.workLength = str.length;
  this.counter = 0;

  this.counter++;
  return this.work[counter % this.workLength];
}

