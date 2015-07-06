// http://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

var inputStrings = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

// "whatisup"

var appearsInFront = function(triplets){
  var possible = {}
  for (var i = 0; i < triplets.length; i++){
    if (triplets[i].length > 0){
      possible[triplets[i][0]] = true;
    }
  }
  possible = Object.keys(possible);
  var onlyAtFront;
  for (var i = 0; i < possible.length; i++){
    var check = true;
    for (var j = 0; j < triplets.length; j++){
      var temp = triplets[j].slice(1);
      if (temp.length > -1 && temp.indexOf(possible[i]) > -1){
        check = false;
      }
    }
    if (check){
      onlyAtFront = possible[i];
    }
  }
  return onlyAtFront;
}

var stillLetters = function(triplets){
  var check = false;
  for (var i = 0; i < triplets.length; i++){
    if (triplets[i].length > 0){
      check = true;
    }
  }
  return check;
}

var removeAddedLetter = function(triplets, letter){
  
}

var recoverSecret = function(triplets) {
  var work = [];
}