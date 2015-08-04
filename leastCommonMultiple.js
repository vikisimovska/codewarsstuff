var lcm = function () {
  var checkAgainst = Math.max.apply(this, arguments) - 1;
  var check = true;

  while (check){
    check = false;
    checkAgainst++;
    for (var i = 0; i < arguments.length; i++){
      if (checkAgainst % arguments[i] !== 0){
        check = true;
      }
    }
  }
  return checkAgainst;
};