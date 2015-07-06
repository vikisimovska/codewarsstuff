// http://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

inputStrings = [
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
  console.log(possible);
}

var recoverSecret = function(triplets) {
  var work = [];
}