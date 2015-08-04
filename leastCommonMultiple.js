var lcm = function () {
  var checkAgainst = Math.max.apply(this, arguments);
  var check = true;
  var toAdd = checkAgainst;

  while (check){
    check = false;
    for (var i = 0; i < arguments.length; i++){
      if (checkAgainst % arguments[i] !== 0){
        check = true;
      }
    }
    checkAgainst += toAdd;
  }
  return checkAgainst - toAdd;
};