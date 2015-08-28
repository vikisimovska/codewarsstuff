function RNG(n) {
  this.n = n;  
  this.store = [];
}

RNG.prototype.rand = function() {
  //return next random number
  if (this.store.length === this.n){
    this.store = [];
  }
  var temp = Math.floor(Math.random() * this.n);
  while (this.store.indexOf(temp) > -1){
    temp = Math.floor(Math.random() * this.n);
  }
  this.store.push(temp);
  return temp;
}