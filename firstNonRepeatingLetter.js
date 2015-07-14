// http://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  for (var i = 0; i < s.length-1; i++){
    var count = 0;
    for (var j = i+1; j < s.length; j++){
      var temp = s[i];
      if (s[i].toLowerCase() === s[j].toLowerCase()){
        count++;
      }
    }
    if (count === 0){
      return temp;
    }
  }
}

