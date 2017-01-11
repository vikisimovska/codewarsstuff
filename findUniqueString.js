function findUniq(arr) {
  var lib = {};
  arr.forEach(function(item){
    if (lib[item] === undefined){
      lib[item] = true;
    } else {
      delete lib[item];
    }
  });

  return Object.keys(lib)[0];
}
