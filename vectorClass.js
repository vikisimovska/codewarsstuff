var Vector = function (components) {
  this.storage = components;
};

Vector.prototype.add = function(toAdd){
  if (this.storage.length !== toAdd.storage.length){
    throw "Error"
    return;
  }

  var result = [];

  for (var i = 0; i < this.storage.length; i++){
    result.push(this.storage[i] + toAdd.storage[i]);
  }

  return result;
}

Vector.prototype.subtract = function(toSubtract){
  if (this.storage.length !== toSubtract.storage.length){
    throw "Error"
    return;
  }

  var result = [];

  for (var i = 0; i < this.storage.length; i++){
    result.push(this.storage[i] - toSubtract.storage[i]);
  }

  return result;
}

Vector.prototype.dot = function(toDot){
  if (this.storage.length !== toDot.storage.length){
    throw "Error"
    return;
  }

  var result = 0

  for (var i = 0; i < this.storage.length; i++){
    result += this.storage[i] * toDot.storage[i];
  }

  return result;
}

Vector.prototype.norm = function(){

  var work = 0

  for (var i = 0; i < this.storage.length; i++){
    work += Math.pow(this.storage[i], 2);
  }

  return Math.sqrt(work);;
}

Vector.prototype.toString = function(){
  return "(" + this.storage.join(',') + ")";
}

Vector.prototype.equals = function(toCheck){

  for (var i = 0; i < this.storage.length; i++){
    if (this.storage[i] !== toCheck.storage[i]){
      return false;
    }
  }
  return true;
}

Array.prototype.equals = function(toCheck){

  for (var i = 0; i < this.length; i++){
    if (this[i] !== toCheck.storage[i]){
      return false;
    }
  }
  return true;
}