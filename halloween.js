function pick(bags, scale) {
  // scale.weigh([bags[0]], [bags[1]]); returns -1, 0 or 1
  var firstCheck = scale.weigh([bags[0], bags[1], bags[2]], [bags[3], bags[4], bags[5]]);

  if (firstCheck === 0){
    var secondCheck = scale.weigh([bags[6]], [bags[7]])
    if (secondCheck === 0){
      return bags[8];
    }
    else if (secondCheck < 0){
      return bags[6];
    }
    else {
      return bags[7];
    }
  }
  else if (firstCheck < 0){
    var secondCheck = scale.weigh([bags[0]], [bags[1]]);
    if (secondCheck === 0){
      return bags[2];
    }
    else if (secondCheck < 0){
      return bags[0];
    }
    else {
      return bags[1];
    }
  }
  else{
    var secondCheck = scale.weigh([bags[3]], [bags[4]]);
    if (secondCheck === 0){
      return bags[5];
    }
    else if (secondCheck < 0){
      return bags[3];
    }
    else {
      return bags[4];
    }
  }

}