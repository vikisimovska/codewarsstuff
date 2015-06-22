//http://www.codewars.com/kata/53a71e153d87ddcb34000d20/train/javascript

function MinHeap(){
  this.storage = [];
}
MinHeap.prototype.push = function(value){
  this.storage.push(value);
}

MinHeap.prototype.pop = function(){
  return this.storage.splice(this.storage.indexOf(Math.min.apply(this, this.storage)), 1)[0];
}