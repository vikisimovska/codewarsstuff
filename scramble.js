function scramble(str1, str2) {
  var lib = {};

  for (var i = 0; i < str1.length; i++){
    if (lib[str1[i]] === undefined){
      lib[str1[i]] = 1;
    } else {
      lib[str1[i]]++;
    }
  }

  var other = {};

  for (var i = 0; i < str2.length; i++){
    if (other[str2[i]] === undefined){
      other[str2[i]] = 1;
    } else {
      other[str2[i]]++;
    }
  }

  for (var key in other){
    if (lib[key] === undefined){
      return false;
    } else if (other[key] > lib[key]){
      return false;
    }
  }

  return true;
}
