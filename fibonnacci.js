var fibonacci = function(n, lib) {
  if (lib === undefined){
    lib = {}
  }
  if (lib[n] !== undefined){
    return lib[n];
  }
  if(n==0 || n == 1)
    return n;
  var toStore = fibonacci(n-1) + fibonacci(n-2);
  lib[n] = toStore;
  return toStore;
}