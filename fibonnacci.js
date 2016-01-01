var fibonacci = (function(){
  var lib = {};

  var f = function(n){
    if (lib[n] !== undefined){
      return lib[n];
    } else {
      if (n === 0 || n === 1){
        return n;
      } else {
        var toStore = f(n-1) + f(n-2);
        lib[n] = toStore;
        return toStore;
      }
    }
  }
  return f;
})();