//http://www.codewars.com/kata/53a71e153d87ddcb34000d20/train/javascript

function MinHeap(){
  this.storage = [];
}
MinHeap.prototype.push = function(value){
  this.storage.push(value);
}

MinHeap.prototype.pop = function(){
  var result = Math.min.apply(this, this.storage);
  this.storage.splice(this.storage.indexOf(result), 1);
  return result;
}